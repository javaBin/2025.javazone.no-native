import { Assets } from '@/Assets';
import { ScreenTemplate } from '@/components';
import { LinkButton, SectionBox, ToggleText } from '@/UI';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View, Dimensions } from 'react-native';

interface FaqItem {
  key: string;
  title: string;
  answer: string;
}

const Volunteers: React.FC = () => {
  const { t } = useTranslation();
  const screenWidth = Dimensions.get('window').width;

  const faqItems: FaqItem[] = [
    { key: 'language', title: t('volunteer.faq.language_question'), answer: t('volunteer.faq.language_answer') },
    {
      key: 'whoCanVolunteer',
      title: t('volunteer.faq.who_can_volunteer'),
      answer: t('volunteer.faq.who_can_volunteer_answer'),
    },
    { key: 'tasks', title: t('volunteer.faq.tasks'), answer: t('volunteer.faq.tasks_answer') },
    {
      key: 'howManyVolunteers',
      title: t('volunteer.faq.how_many_volunteers'),
      answer: t('volunteer.faq.how_many_volunteers_answer'),
    },
    {
      key: 'learningOpportunities',
      title: t('volunteer.faq.learning_opportunities'),
      answer: t('volunteer.faq.learning_opportunities_answer'),
    },
    { key: 'travel', title: t('volunteer.faq.travel'), answer: t('volunteer.faq.travel_answer') },
    { key: 'awezone', title: t('volunteer.faq.awezone'), answer: t('volunteer.faq.awezone_answer') },
    { key: 'whenToMeet', title: t('volunteer.faq.when_to_meet'), answer: t('volunteer.faq.when_to_meet_answer') },
    {
      key: 'applicationDeadline',
      title: t('volunteer.faq.application_deadline'),
      answer: t('volunteer.faq.application_deadline_answer'),
    },
  ];

  const [toggles, setToggles] = useState<Record<string, boolean>>(
    faqItems.reduce((acc, item) => ({ ...acc, [item.key]: false }), {})
  );

  useEffect(() => {
    if (screenWidth > 768) {
      setToggles(faqItems.reduce((acc, item) => ({ ...acc, [item.key]: true }), {}));
    }
  }, [screenWidth]);

  const handleToggle = (key: string) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ScreenTemplate pageTitle={t('volunteer.title')} shouldScrollToTop={true}>
      {['what_is_javazone', 'description', 'who_are_we_looking_for', 'who_can_apply'].map((textKey) => (
        <Text key={textKey} style={[Assets.styles.preface, { marginHorizontal: 20 }]}>
          {t(`volunteer.${textKey}`)}
        </Text>
      ))}
      <LinkButton
        title={t('volunteer.apply_now')}
        targetBlank={true}
        href={'https://docs.google.com/forms/d/19bdXhtH55KBcZy6JudOFnaN0_K67Q7ZozUUhCnuf49U/viewform'}
      />
      <SectionBox sectionTitle={t('volunteer.faq_title')}>
        {faqItems.map(({ key, title, answer }) => (
          <View key={key}>
            <ToggleText title={title} toggle={toggles[key]} handleToggle={() => handleToggle(key)} />
            {toggles[key] && <Text style={Assets.styles.text}>{answer}</Text>}
          </View>
        ))}
      </SectionBox>
    </ScreenTemplate>
  );
};

export default Volunteers;
