import { HoldTheDate, ScreenTemplate } from '@/components';
import { useTranslation } from 'react-i18next';
import { fetchProgram } from '@/api/fetchProgram';
import { useEffect, useState } from 'react';
import { TalksProgram } from '@/api/types/talksProgram';
import { Text } from 'react-native';

const Program = () => {
  const [programs, setPrograms] = useState<TalksProgram>({ sessions: [] });
  const { t } = useTranslation();

  const allPrograms = fetchProgram();

  useEffect(() => {
    allPrograms
      .then((data) => {
        setPrograms(data);
      })
      .catch((error) => {
        console.error('Error fetching program:', error);
      });
  }, []);

  return (
    <ScreenTemplate>
      <HoldTheDate subPageHeader={t('program_information')} />
    </ScreenTemplate>
  );
};

export default Program;
