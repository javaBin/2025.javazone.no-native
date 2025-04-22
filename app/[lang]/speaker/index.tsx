import { BulletListItem, ScreenTemplate } from '@/components';
import { useTranslation } from 'react-i18next';
import { LinkText, LinkButton, SectionBox, SvgImage } from '@/UI';
import {Platform, Text} from 'react-native';
import { Assets } from '@/Assets';
import React from 'react';
import { useGlobalSearchParams } from 'expo-router';
import { useMediaQuery } from 'react-responsive';

const Speaker = () => {
  const { t } = useTranslation();
  const { lang } = useGlobalSearchParams();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <ScreenTemplate pageTitle={t('speakers.pageTitle')} shouldScrollToTop={true}>
      <Text style={[Assets.styles.text, { marginHorizontal: 20}]}>{t('speakers.conference_intro')}</Text>
      <Text style={[Assets.styles.text, { marginHorizontal: 20 }]}>
        {t('speakers.conference_attendance')} {t('speakers.international_speakers')} <Text style={{ fontWeight: 'bold', fontSize: 21 }}> {t('speakers.international_speakers_date')}</Text>
      </Text>
      <LinkButton
        href="https://talks.javazone.no/"
        title={t('speakers.submit_proposal')}
        targetBlank={true}
        margin={isMobile ? 20 : 40}
      />

      <SectionBox sectionTitle={t('speakers.speaking_experience')}>
        <Text style={Assets.styles.text}>{t('speakers.speaking_experience_desc')}</Text>
        <Text style={Assets.styles.text}>{t('speakers.importance_of_speakers')}</Text>
        <Text style={Assets.styles.text}>{t('speakers.commitment_to_diversity')}</Text>
        <LinkButton
            href="https://vimeo.com/javazone"
            title={t('speakers.vimeo')}
            targetBlank={true}
            margin={Platform.OS !== 'android' && isMobile ? 10 : 20}
            androidBlurPatch={Platform.OS === 'android'}
        />
      </SectionBox>

      <SectionBox sectionTitle={t('speakers.formats_and_durations')}>
        <Text style={Assets.styles.text}>{t('speakers.formats_and_durations_desc')}</Text>

        <Text style={[Assets.styles.sectionSubTitle, { marginTop: 20 }]}>{t('speakers.lightning_talks')}</Text>
        <Text style={Assets.styles.text}>{t('speakers.lightning_talks_desc')}</Text>

        <Text style={[Assets.styles.sectionSubTitle, { marginTop: 20 }]}>{t('speakers.presentations')}</Text>
        <Text style={Assets.styles.text}>{t('speakers.presentations_desc')}</Text>

        <Text style={[Assets.styles.sectionSubTitle, { marginTop: 20 }]}>{t('speakers.workshops')}</Text>
        <Text style={Assets.styles.text}>{t('speakers.workshops_desc')}</Text>

        <Text style={[Assets.styles.sectionSubTitle, { marginTop: 20 }]}>{t('speakers.javazone_kids')}</Text>
        <Text style={Assets.styles.text}>
          {t('speakers.javazone_kids_desc_start')}
          <LinkText
            title={t('speakers.javazone_kids_desc_link_title')}
            href={`/${lang}/speaker/kids`}
            targetSelf={true}
          />
          {t('speakers.javazone_kids_desc_end')}
        </Text>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />
      </SectionBox>

      <SectionBox sectionTitle={t('speakers.audience_and_topics')}>
        <Text style={Assets.styles.text}>{t('speakers.audience_and_topics_desc')}</Text>
        <Text style={Assets.styles.text}>{t('speakers.content_scope')}</Text>
        <Text style={Assets.styles.text}>
          {t('speakers.submission_tips_desc_start')}
          <LinkText
            title={t('speakers.submission_tips_desc_link_title')}
            href={`/${lang}/speaker/tips`}
            targetSelf={true}
          />
          {t('speakers.submission_tips_desc_end')}
        </Text>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />
      </SectionBox>

      <SectionBox sectionTitle={t('speakers.evaluation_of_talks')}>
        <Text style={Assets.styles.text}>{t('speakers.evaluation_of_talks_desc')}</Text>
        <Text style={Assets.styles.text}>{t('speakers.submit_early')}</Text>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />
      </SectionBox>

      <SectionBox sectionTitle={t('speakers.location')}>
        <Text style={Assets.styles.text}>{t('speakers.location_desc')}</Text>
        <Text style={Assets.styles.text}>{t('speakers.traveling_to_lillestrom')}</Text>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />
      </SectionBox>

      <SectionBox sectionTitle={t('speakers.whats_in_it_for_me')}>
        <Text style={Assets.styles.sectionSubTitle}>{t('speakers.accepted_presentations')}</Text>
        <Text style={Assets.styles.text}>{t('speakers.accepted_presentations_desc')}</Text>
        <Text style={Assets.styles.text}>{t('speakers.journeyzone')}</Text>

        <Text style={Assets.styles.sectionSubTitle}>{t('speakers.coverage_of_expenses')}</Text>
        <Text style={Assets.styles.text}>
          {t('speakers.coverage_of_expenses_start')}
          <LinkText
            title={t('speakers.coverage_of_expenses_link')}
            href={`/${lang}/speaker/reimbursement`}
            targetSelf={true}
          />
          {t('speakers.coverage_of_expenses_end')}
        </Text>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />
      </SectionBox>

      <SectionBox sectionTitle={t('speakers.important_principles')}>
        <Text style={Assets.styles.text}>
          {t('speakers.important_principles_desc_start')}
          {t('speakers.important_principles_desc_read_more_1')}
          <LinkText
            title={t('speakers.important_principles_desc_read_more_2')}
            href={`/${lang}/info`}
            targetSelf={true}
          />
          {t('speakers.important_principles_desc_end')}
        </Text>

        <BulletListItem text={t('speakers.no_speaker_slots')} />
        <BulletListItem text={t('speakers.no_sales_pitches')} />
        <BulletListItem text={t('speakers.no_differentiation')} />

        <Text style={Assets.styles.text}>{t('speakers.adherence_to_principles')}</Text>
        <Text style={Assets.styles.text}>{t('speakers.closing_statement')}</Text>
        <Text style={[Assets.styles.callout, { marginTop: 10 }]}>{t('speakers.program_committee')}</Text>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />
      </SectionBox>
    </ScreenTemplate>
  );
};

export default Speaker;
