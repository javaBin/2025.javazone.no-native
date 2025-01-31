import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { SvgImage } from "@/UI";
import { Assets } from "@/Assets";
import React from "react";

type ToggleTextProps = {
    title: string;
    toggle: boolean;
    handleToggle: () => void;
}

const ToggleText: React.FC<ToggleTextProps> = ({title, toggle, handleToggle}) => {
    return (
        <Pressable style={styles.toggleButton} onPress={handleToggle}>
            <Text style={styles.toggleTitle}>{title}</Text>
            <View style={{width: 22}}>
                {
                    toggle ?
                        <SvgImage SVG={Assets.icons.TriangleDown} height={22} width={22}/> :
                        <SvgImage SVG={Assets.icons.TriangleRight} height={22} width={22}/>
                }
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    toggleButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        marginVertical: 5,
    },
    toggleTitle: {
        color: Assets.colors.jz2025ThemeColors.vividOrange,
        fontSize: Dimensions.get('window').width > 768 ? 20 : 16,
        fontFamily: 'Cinzel_500Medium',
    },
});

export default ToggleText