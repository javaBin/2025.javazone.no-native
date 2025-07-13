import type { TalksProgram } from '@/api/types/talksProgram';

export async function fetchProgram(): Promise<TalksProgram> {
  try {
    const response = await fetch('https://sleepingpill.javazone.no/public/allSessions/javazone_2024');

    if (!response.ok) {
      throw new Error(`Failed to fetch program: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Validate that we have the expected data structure
    if (!data || !Array.isArray(data.sessions)) {
      throw new Error('Invalid program data structure received');
    }

    return data as TalksProgram;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching program: ${error.message}`);
    }
    throw new Error('Unknown error occurred while fetching program');
  }
}

export const fetchIndividualProgram = async (id?: string) => {
  try {
    if (!id) {
      throw new Error('Session ID is required');
    }

    const program = await fetchProgram();
    const session = program.sessions.find((session) => session.id === id);

    if (!session) {
      throw new Error(`Session with ID ${id} not found`);
    }

    return session;
  } catch (error) {
    if (error instanceof Error) {
      throw error; // Re-throw the original error
    }
    throw new Error('Unknown error occurred while fetching individual program');
  }
};
