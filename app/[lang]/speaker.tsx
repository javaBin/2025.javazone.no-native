import { ScreenTemplate } from '@/components';
import { useTranslation } from 'react-i18next';
import {SectionBox, SvgImage} from "@/UI";
import {Text} from "react-native";
import {Assets} from "@/Assets";
import React from "react";

const Speaker = () => {
  const { t } = useTranslation();

  return (
    <ScreenTemplate pageTitle={t('pageTitles.speaker')} shouldScrollToTop={true}>
        <SectionBox sectionTitle={"What is it like speaking at JavaZone?"}>
            <Text style={Assets.styles.text}>lorem ipsum</Text>
            <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 10}}/>
        </SectionBox>

        <SectionBox sectionTitle={"Formats and durations"}>
            <Text style={Assets.styles.text}>lorem ipsum</Text>
            <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 10}}/>
        </SectionBox>

        <SectionBox sectionTitle={"Audience and topics"}>
            <Text style={Assets.styles.text}>lorem ipsum</Text>
            <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 10}}/>
        </SectionBox>

        <SectionBox sectionTitle={"Ongoing evaluation of talks"}>
            <Text style={Assets.styles.text}>lorem ipsum</Text>
            <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 10}}/>
        </SectionBox>

        <SectionBox sectionTitle={"Submission tips"}>
            <Text style={Assets.styles.text}>lorem ipsum</Text>
            <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 10}}/>
        </SectionBox>

        <SectionBox sectionTitle={"Location"}>
            <Text style={Assets.styles.text}>lorem ipsum</Text>
            <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 10}}/>
        </SectionBox>

        <SectionBox sectionTitle={"What's in it for me?"}>
            <Text style={Assets.styles.sectionSubTitle}>Accepted presentations, lightning talks, and workshops</Text>
            <Text style={Assets.styles.text}>lorem ipsum</Text>
            <Text style={Assets.styles.sectionSubTitle}>Coverage of expenses</Text>
            <Text style={Assets.styles.text}>lorem ipsum</Text>
            <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 10}}/>
        </SectionBox>

        <SectionBox sectionTitle={"Important principles"}>
            <Text style={Assets.styles.text}>lorem ipsum</Text>
            <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 10}}/>
        </SectionBox>
    </ScreenTemplate>
  );
};

export default Speaker;
