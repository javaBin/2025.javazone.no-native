import { ScreenTemplate } from '@/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';

const Volunteer = () => {
  const { t } = useTranslation();
  return (
    <ScreenTemplate>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>{t('volunteer.title')}</Text>
        <Text style={styles.subHeader}>{t('volunteer.what_is_volunteer')}</Text>
        <Text style={styles.paragraph}>{t('volunteer.description')}</Text>

        <Text style={styles.subHeader}>{t('volunteer.who_are_we_looking_for')}</Text>
        <Text style={styles.paragraph}>{t('volunteer.who_can_apply')}</Text>

        <Button title={t('volunteer.apply_now')} onPress={() => alert(t('volunteer.application_coming_soon'))} />

        <Text style={styles.subHeader}>{t('volunteer.faq_title')}</Text>

        <Text style={styles.question}>{t('volunteer.faq.language_question')}</Text>
        <Text style={styles.answer}>{t('volunteer.faq.language_answer')}</Text>

        <Text style={styles.question}>{t('volunteer.faq.who_can_volunteer')}</Text>
        <Text style={styles.answer}>{t('volunteer.faq.who_can_volunteer_answer')}</Text>

        <Text style={styles.question}>{t('volunteer.faq.tasks')}</Text>
        <Text style={styles.answer}>{t('volunteer.faq.tasks_answer')}</Text>

        <Text style={styles.question}>{t('volunteer.faq.how_many_volunteers')}</Text>
        <Text style={styles.answer}>{t('volunteer.faq.how_many_volunteers_answer')}</Text>

        <Text style={styles.question}>{t('volunteer.faq.learning_opportunities')}</Text>
        <Text style={styles.answer}>{t('volunteer.faq.learning_opportunities_answer')}</Text>

        <Text style={styles.question}>{t('volunteer.faq.travel')}</Text>
        <Text style={styles.answer}>{t('volunteer.faq.travel_answer')}</Text>

        <Text style={styles.question}>{t('volunteer.faq.awezone')}</Text>
        <Text style={styles.answer}>{t('volunteer.faq.awezone_answer')}</Text>

        <Text style={styles.question}>{t('volunteer.faq.when_to_meet')}</Text>
        <Text style={styles.answer}>{t('volunteer.faq.when_to_meet_answer')}</Text>

        <Text style={styles.question}>{t('volunteer.faq.application_deadline')}</Text>
        <Text style={styles.answer}>{t('volunteer.faq.application_deadline_answer')}</Text>

        <Text style={styles.question}>{t('volunteer.faq.how_to_share')}</Text>
        <Text style={styles.answer}>{t('volunteer.faq.how_to_share_answer')}</Text>
      </ScrollView>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  answer: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Volunteer;
