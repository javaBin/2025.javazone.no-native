import { Assets } from '@/Assets';
import { ScreenTemplate } from '@/components';
import { LinkButton, SectionBox } from '@/UI';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

interface FaqItem {
  key: string;
  title: string;
  answer: string;
}

const Volunteers: React.FC = () => {
  const { t } = useTranslation();

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

  return (
    <ScreenTemplate pageTitle={t('volunteer.title')} shouldScrollToTop={true}>
      <Text style={[Assets.styles.sectionSubTitle, { marginHorizontal: 20 }]}>{t('volunteer.what_is_javazone')}</Text>
      <Text style={[Assets.styles.preface, { marginHorizontal: 20 }]}>{t('volunteer.description')}</Text>

      <Text style={[Assets.styles.sectionSubTitle, { marginHorizontal: 20 }]}>{t('volunteer.who_are_we_looking_for')}</Text>
      <Text style={[Assets.styles.preface, { marginHorizontal: 20 }]}>{t('volunteer.who_can_apply')}</Text>

      <LinkButton
        margin={20}
        title={t('volunteer.apply_now')}
        targetBlank={true}
        href={'https://docs.google.com/forms/d/19bdXhtH55KBcZy6JudOFnaN0_K67Q7ZozUUhCnuf49U/viewform'}
      />
      <SectionBox sectionTitle={t('volunteer.faq_title')}>
        {faqItems.map(({ key, title, answer }) => (
          <View key={key} style={{padding: 10}}>
            <Text style={Assets.styles.sectionSubTitle}>{title}</Text>
            <Text style={[Assets.styles.text, {textAlign: 'center'}]}>{answer}</Text>
          </View>
        ))}
      </SectionBox>
    </ScreenTemplate>
  );
};

export default Volunteers;
