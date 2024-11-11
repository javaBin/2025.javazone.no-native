import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "@react-navigation/elements";
import { Assets } from "@/Assets";
import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { Flag } from "@/components/index";
import { CountryCode, FlagSize, FlagStyle } from "@/models";
import { useI18nContext } from "@/contexts/I18nContext";

type ScreenTemplateProps = {
    children: React.ReactNode;
    headerPadding?: number;
}

const ScreenTemplate = ({ children, headerPadding }: ScreenTemplateProps) => {
    // useHeaderHeight is a hook that gives you the height of the header
    const headerHeight = useHeaderHeight();
    // @ts-ignore
    const { setLocale } = useI18nContext();

    return (
        <LinearGradient
            colors={[
                Assets.colors.gradient.medium,
                Assets.colors.gradient.dark
            ]}
            style={{ flex: 1, paddingTop: headerPadding ? headerHeight : 0 }}
            locations={[0, 1]}
        >
            <SafeAreaView style={Assets.styles.safeArea}>
                <View style={Assets.styles.container}>
                    <View style={styles.languagePickers}>
                        <Flag
                            flagLocale={'nb-NO'}
                            countryCode={CountryCode.Norwegian}
                            flagStyle={FlagStyle.Flat}
                            flagSize={FlagSize.Small}
                            onPress={async () => await setLocale('nb-NO')}
                        />
                        <Flag
                            flagLocale={'en-US'}
                            countryCode={CountryCode.British}
                            flagStyle={FlagStyle.Flat}
                            flagSize={FlagSize.Small}
                            onPress={async () => await setLocale('en-US')}
                        />
                    </View>
                    {children}
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    languagePickers: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 0,
        right: 0,
    },
});

export default ScreenTemplate;