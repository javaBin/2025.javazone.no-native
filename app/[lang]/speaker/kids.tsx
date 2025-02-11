import {BulletListItem, ScreenTemplate} from "@/components";
import {useTranslation} from "react-i18next";
import {SectionBox, SvgImage} from "@/UI";
import {Text, View} from "react-native";
import {Assets} from "@/Assets";
import React from "react";

const SpeakerKids = () => {
    const { t } = useTranslation();

    return (
        <ScreenTemplate pageTitle={t('kids.call_for_speakers_title')}>
            <Text style={[Assets.styles.text, {marginHorizontal: 20}]}>
                {t('kids.javazone_kids_intro')}
                {t('kids.event_date_location')}
            </Text>
            <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

            <SectionBox sectionTitle={t('kids.workshop_description_intro')}>
                <BulletListItem text={t('kids.workshop_title')}/>
                <BulletListItem text={t('kids.workshop_abstract')}/>
                <BulletListItem text={t('kids.workshop_outline')}/>

                <View style={{paddingLeft: 30}}>
                    <BulletListItem text={t('kids.workshop_age_range')}/>
                    <BulletListItem text={t('kids.workshop_max_participants')}/>
                    <BulletListItem text={t('kids.workshop_language')}/>
                    <BulletListItem text={t('kids.workshop_experience')}/>
                </View>

                <Text style={[Assets.styles.text, {marginTop: 20}]}>{t('kids.speakers_benefits')}</Text>
                <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />
            </SectionBox>
        </ScreenTemplate>
    )
}

export default SpeakerKids;