import { Session } from '@/api/types/talksProgram';

export function groupSessionsByTimeslot(sessions: Session[]): Record<string, Session[]> {
  const hasStartTime = sessions.some((session) => !!session.startTime);
  if (!hasStartTime) {
    return { '': sessions };
  }
  return sessions.reduce((acc: Record<string, Session[]>, session: Session) => {
    const startTime = session.startSlot ?? '00:00';
    const timeslot = startTime;
    if (!acc[timeslot]) {
      acc[timeslot] = [];
    }
    acc[timeslot].push(session);
    return acc;
  }, {});
}

export const dayAndTimeFormatWithMonth = Intl.DateTimeFormat('en', {
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
});

