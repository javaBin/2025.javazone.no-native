import React from "react";
import {Dimensions, StyleProp, StyleSheet, Text, ViewStyle} from "react-native";
import {Assets} from "@/Assets";

type PageTitleProps = {
    title: string;
    style?: StyleProp<ViewStyle>;
}

const PageTitle: React.FC<PageTitleProps> = (({title, style}) => {
    return (
        <Text style={{...styles.pageTitle, ...{style}}}>{title}</Text>
    )
});

const styles = StyleSheet.create({
    pageTitle: {
        fontSize: Dimensions.get('window').width > 768 ? 38 : 36,
        color: Assets.colors.brand.charcoal,
        fontFamily: 'Cinzel_400Regular'
    }
});

export default PageTitle;