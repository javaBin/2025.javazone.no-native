export type TalksProgram = {
  sessions: Session[];
};

export type SessionLanguage = 'no' | 'en'; // todo: unused

export type SessionFormat = 'presentation' | 'lightning-talk' | 'workshop'; // todo: unused

export type Session = {
  intendedAudience: string;
  suggestedKeywords: string[];
  length: string;
  format: string;
  language: string;
  abstract: string;
  title: string;
  id: string;
  sessionId: string;
  conferenceId: string;
  speakers: Speaker[];
  //fields below are not yet available in the API, but will be used in the future
  room?: string;
  workshopPrerequisites?: string;
  registerLoc?: string;
  startTime?: string;
  endTime?: string;
  video?: string;
  startTimeZulu?: string;
  endTimeZulu?: string;
  startSlot?: string;
  startSlotZulu?: string;
};

export type Speaker = {
  name: string;
  bio?: string;
  twitter?: string;
  linkedin?: string;
  bluesky?: string;
};
