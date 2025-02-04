import {Assets} from "@/Assets";
import {BlurView} from "expo-blur";
import {Text} from "react-native";
import React from "react";

type SectionBoxProps = {
    children: React.ReactNode;
    sectionTitle: string;
}

const SectionBox: React.FC<SectionBoxProps> = ({children, sectionTitle}) => {
    return (
        <BlurView tint="light" intensity={20} style={{...Assets.styles.section, ...Assets.styles.shadow}}>
            <Text style={Assets.styles.sectionTitle}>{sectionTitle}</Text>
            {children}
        </BlurView>
    )
}

export default SectionBox;