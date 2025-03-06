import { ScreenTemplate } from '@/components';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text } from 'react-native';
import { Assets } from '@/Assets';
import {LinkText, SectionBox, SvgImage} from '@/UI';
import React from 'react';

const Reimbursement = () => {
  const { t } = useTranslation();

  return (
    <ScreenTemplate pageTitle={t('reimbursement.pageTitle')} shouldScrollToTop={true}>
      <SectionBox sectionTitle={t('reimbursement.what_how')}>
        <Text style={Assets.styles.text}>{t('reimbursement.eligibility')}</Text>
        <Text style={Assets.styles.text}>{t('reimbursement.application_deadline')}</Text>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot} />
      </SectionBox>

      <SectionBox sectionTitle={t('reimbursement.how_to_apply')}>
        <Text style={Assets.styles.text}>
            {t('reimbursement.apply_note_start')}
            <LinkText title={t('reimbursement.apply_note_link')} href={Assets.links.refundMail}/>
            {t('reimbursement.apply_note_end')}
        </Text>
        <Text style={Assets.styles.text}>{t('reimbursement.apply_details')}</Text>
        <Text style={Assets.styles.text}>{t('reimbursement.hotel_deal')}</Text>
        <Text style={Assets.styles.text}>{t('reimbursement.lightning_talks')}</Text>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot} />
      </SectionBox>

      <SectionBox sectionTitle={t('reimbursement.confirmation_reimbursement')}>
        <Text style={Assets.styles.text}>
            {t('reimbursement.confirmation_note_start')}
            <LinkText title={t('reimbursement.confirmation_note_link')} href={Assets.links.refundMail}/>
            {t('reimbursement.confirmation_note_end')}
        </Text>
        <Text style={Assets.styles.text}>{t('reimbursement.reimbursement_process')}</Text>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot} />
      </SectionBox>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  dividerDot: {
    margin: 15,
  },
});

export default Reimbursement;
