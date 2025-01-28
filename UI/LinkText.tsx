import {Link} from "expo-router";
import React from "react";
import {Dimensions, StyleProp, StyleSheet, ViewStyle} from "react-native";
import {Assets} from "@/Assets";

type LinkTextProps = {
    title: string;
    href: string;
    style?: StyleProp<ViewStyle>;
}

const LinkText: React.FC<LinkTextProps> = ({title, href, style}) => {
    return (
        <Link href={href} rel="noopener norefferer" style={{...styles.listItemMail, ...{style}}}>{title}</Link>
    )
}

const styles = StyleSheet.create({
    listItemMail: {
        color: Assets.colors.jz2025ThemeColors.vividOrange,
        fontFamily: 'PlayfairDisplay_400Regular',
        fontSize: Dimensions.get('window').width >= 768 ? 18 : 14,
        textDecorationLine: 'underline',
        marginHorizontal: 3
    }
})

export default LinkText;