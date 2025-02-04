import {Assets} from "@/Assets";
import {BlurView} from "expo-blur";
import {Text} from "react-native";
import React from "react";

type SectionBoxProps = {
    sectionTitle: string;
    children?: React.ReactNode;
}

const SectionBox: React.FC<SectionBoxProps> = ({sectionTitle, children}) => {
    return (
        <BlurView tint="light" intensity={20} style={{...Assets.styles.section, ...Assets.styles.shadow}}>
            <Text style={Assets.styles.sectionTitle}>{sectionTitle}</Text>
            {children}
        </BlurView>
    )
}

export default SectionBox;