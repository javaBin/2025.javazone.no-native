import {ScreenTemplate} from "@/components";
import {useTranslation} from "react-i18next";
import {StyleSheet, Text, View} from "react-native";
import {Assets} from "@/Assets";
import {SectionBox, SvgImage} from "@/UI";
import React from "react";

const SpeakerTips = () => {
    const { t } = useTranslation();

    return (
        <ScreenTemplate pageTitle={t('submissionTips.submission_tips_title')} shouldScrollToTop={true}>

            <SectionBox sectionTitle={t('submissionTips.increase_chance')}>
                <Text style={Assets.styles.text}>{t('submissionTips.proposal_correlation')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.tips_intro')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.good_title')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.good_title_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.catchy_abstract')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.catchy_abstract_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.detailed_outline')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.detailed_outline_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.be_concise')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.be_concise_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.supporting_materials')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.supporting_materials_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.fill_mandatory_fields')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.fill_mandatory_fields_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.review_proposal')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.review_proposal_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.live_coding')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.live_coding_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.multiple_proposals')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.multiple_proposals_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.no_spam')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.no_spam_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.no_shouting')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.no_shouting_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>
            </SectionBox>

            <SectionBox sectionTitle={t('submissionTips.rejection_reasons_title')}>
                <Text style={Assets.styles.text}>{t('submissionTips.rejection_reasons_intro')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.not_enough_info')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.not_enough_info_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.proposal_too_thin')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.proposal_too_thin_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.too_much_content')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.too_much_content_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.abstract_not_catchy')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.abstract_not_catchy_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.theme_not_fit')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.theme_not_fit_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.co_presenter_accepted')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.co_presenter_accepted_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>

                <Text style={Assets.styles.sectionSubTitle}>{t('submissionTips.unlucky')}</Text>
                <Text style={Assets.styles.text}>{t('submissionTips.unlucky_desc')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={styles.dividerDot}/>
            </SectionBox>
        </ScreenTemplate>
    )
}

const styles = StyleSheet.create({
    dividerDot: {
        margin: 15
    }
})

export default SpeakerTips