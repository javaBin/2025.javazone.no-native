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
  const hasStartTime = sessions.some((session) => !!session.startTime);
  if (!hasStartTime) {
    return { '': sessions };
  }
  return sessions.reduce((acc: Record<string, Session[]>, session: Session) => {
    const startTime = session.startSlot ?? session.startTime ?? '00:00';
    const timeslot = startTime;
    if (!acc[timeslot]) {
      acc[timeslot] = [];
    }
    acc[timeslot].push(session);
    return acc;
  }, {});
}

export const dayAndTimeFormatWithMonth = new Intl.DateTimeFormat('en', {
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
});

// Safe date formatting utility
export function formatSessionTime(timeString: string): string {
  const date = safeParseDate(timeString);
  if (!date) {
    return 'Time TBD';
  }

  try {
    return dayAndTimeFormatWithMonth.format(date);
  } catch (error) {
    console.warn('Failed to format date:', timeString, error);
    return 'Time TBD';
  }
}

export const formatSessionInfo = (session: Session, card: boolean) => {
  const timeDisplay = session.startTime ? formatSessionTime(session.startTime) : 'Time/Room TBD';
  const formatDisplay = session.format ? ` - ${session.format}` : '';
  const roomDisplay = session.room != undefined && session.format != 'workshop' ? ` - ${session.room} -` : '';
  return card ? `${roomDisplay}${timeDisplay}${formatDisplay}` : `${timeDisplay}${roomDisplay}`;
};
