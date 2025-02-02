import React from "react";
import {Dimensions, StyleProp, StyleSheet, Text, View, ViewStyle} from "react-native";
import {Assets} from "@/Assets";
import {SvgImage} from "@/UI/";

type PageTitleProps = {
    title: string;
    style?: StyleProp<ViewStyle>;
}

const PageTitle: React.FC<PageTitleProps> = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <SvgImage SVG={Assets.UI.DividerWide} height={10}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    title: {
        fontSize: Dimensions.get('window').width > 768 ? 38 : 36,
        color: Assets.colors.brand.charcoal,
        fontFamily: 'Cinzel_400Regular'
    }
});

export default PageTitle;