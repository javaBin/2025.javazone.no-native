import { useState, useMemo } from 'react';
import { Session } from '@/api/types/talksProgram';
import { groupSessionsByTimeslot } from '@/utils/programUtils';

type FilterType = 'date' | 'language' | 'format';

type Filters = {
  date: string | null;
  language: string | null;
  format: string | null;
};

const initialFilters: Filters = {
  date: null,
  language: null,
  format: null,
};

export default function useProgramFilters(
  sessions: Session[],
  favorites: string[]
) {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const setFilter = (type: FilterType, value: string | null) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
    if (type !== 'date') setShowFavoritesOnly(false);
  };

  const clearFilters = () => setFilters(initialFilters);

  const filteredSessions = useMemo(() => {
    return sessions.filter((session) => {
      const matchesDate =
        !filters.date ||
        filters.date === 'full' ||
        (filters.date === 'wed' && session.startTime?.startsWith('2024-09-03')) ||
        (filters.date === 'thur' && session.startTime?.startsWith('2024-09-04')) ||
        filters.date === 'live';

      const matchesLanguage = !filters.language || filters.language === 'all' || session.language === filters.language;
      const matchesFormat = !filters.format || filters.format === 'all' || session.format === filters.format;

      return matchesDate && matchesLanguage && matchesFormat;
    });
  }, [sessions, filters]);

  const sessionsToShow = showFavoritesOnly
    ? sessions.filter((s) => favorites.includes(s.id))
    : filteredSessions;

  const groupedSessions = useMemo(
    () => groupSessionsByTimeslot(sessionsToShow),
    [sessionsToShow]
  );

  const sortedTimeslots = useMemo(
    () => Object.keys(groupedSessions).sort((a, b) => a.localeCompare(b)),
    [groupedSessions]
  );

  return {
    filters,
    setFilter,
    clearFilters,
    showFavoritesOnly,
    setShowFavoritesOnly,
    filteredSessions: sessionsToShow,
    groupedSessions,
    sortedTimeslots,
  };
}
