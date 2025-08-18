import { Session } from '@/api/types/talksProgram';

// Safe date parsing utility
export function safeParseDate(dateString: string): Date | null {
  if (!dateString) return null;

  try {
    // Handle incomplete ISO strings by adding missing parts
    let normalizedDate = dateString;

    // If missing seconds, add them
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(dateString)) {
      normalizedDate = `${dateString}:00`;
    }

    // If missing timezone, add UTC
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(normalizedDate)) {
      normalizedDate = `${normalizedDate}Z`;
    }

    const date = new Date(normalizedDate);

    // Check if date is valid
    if (isNaN(date.getTime())) {
      return null;
    }

    return date;
  } catch (error) {
    console.warn('Failed to parse date:', dateString, error);
    return null;
  }
}

export function groupSessionsByTimeslot(sessions: Session[]): Record<string, Session[]> {
  const hasStartTime = sessions.some((session) => !!session.startTimeZulu);
  if (!hasStartTime) {
    return { '': sessions };
  }
  return sessions.reduce((acc: Record<string, Session[]>, session: Session) => {
    const startTime = session.startSlotZulu ?? session.startTimeZulu ?? '00:00';
    const timeslot = startTime;
    if (!acc[timeslot]) {
      acc[timeslot] = [];
    }
    acc[timeslot].push(session);
    return acc;
  }, {});
}

// Create locale-aware formatters
export const createDayAndTimeFormatter = (locale: string | string[]) => new Intl.DateTimeFormat(locale === 'no' ? 'nb-NO' : 'en', {
  weekday: 'long',
  hour: 'numeric',
  minute: '2-digit',
});

export const createTimeOnlyFormatter = (locale: string | string[]) => new Intl.DateTimeFormat(locale === 'no' ? 'nb-NO' : 'en', {
  hour: 'numeric',
  minute: '2-digit',
});

// Helper function to capitalize first letter
const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Safe date formatting utility
export function formatSessionTime(timeString: string, locale: string | string[] = 'en'): string {
  const date = safeParseDate(timeString);
  if (!date) {
    return 'Time TBD';
  }

  try {
    const formatter = createDayAndTimeFormatter(locale);
    const formatted = formatter.format(date);

    // Capitalize first letter for Norwegian
    return locale === 'no' ? capitalizeFirst(formatted) : formatted;
  } catch (error) {
    console.warn('Failed to format date:', timeString, error);
    return 'Time TBD';
  }
}

export const formatSessionInfo = (session: Session, card: boolean, locale: string | string[]  = 'en') => {
  const startDate = session.startTimeZulu ? safeParseDate(session.startTimeZulu) : null;
  const endDate = session.endTimeZulu ? safeParseDate(session.endTimeZulu) : null;

  if (!startDate) {
    return 'Time/Room TBD';
  }

  try {
    const dayAndTimeFormatter = createDayAndTimeFormatter(locale);
    const timeOnlyFormatter = createTimeOnlyFormatter(locale);

    let startTimeDisplay = capitalizeFirst(dayAndTimeFormatter.format(startDate));

    let timeDisplay = startTimeDisplay;

    // If we have an end time and it's on the same day, just show the end time
    if (endDate && startDate.toDateString() === endDate.toDateString()) {
      const endTimeOnly = timeOnlyFormatter.format(endDate);
      timeDisplay = `${startTimeDisplay} - ${endTimeOnly}`;
    } else if (endDate) {
      let endTimeDisplay = capitalizeFirst(dayAndTimeFormatter.format(endDate));
      timeDisplay = `${startTimeDisplay} - ${endTimeDisplay}`;
    }

    const roomDisplay = session.room != undefined && session.format != 'workshop' ? `${session.room}` : '';

    if (card) {
      return roomDisplay ? `${roomDisplay}, ${timeDisplay} ` : `${timeDisplay} `;
    } else {
      return roomDisplay ? `${timeDisplay}, ${roomDisplay}` : timeDisplay;
    }
  } catch (error) {
    console.warn('Failed to format session info:', session.startTimeZulu, error);
    return 'Time/Room TBD';
  }
};
