import type { TalksProgram } from '@/api/types/talksProgram';

export async function fetchProgram() { // todo: error handling
  return await fetch('https://sleepingpill.javazone.no/public/allSessions/javazone_2024').then<TalksProgram>((res) =>
    res.json()
  );
}

export const fetchIndividualProgram = (id?: string) =>
  fetchProgram().then((program) => program.sessions.find((session) => session.id === id));
