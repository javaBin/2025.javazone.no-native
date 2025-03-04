import {Stack} from "expo-router/stack";
import {BlurView} from "expo-blur";
import {Platform, StyleSheet} from "react-native";
import {Assets} from "@/Assets";

const nativeScreenOptions = {
    headerShown: true,
    headerTransparent: true,
    headerBackground: () => <BlurView tint="light" intensity={90} style={[StyleSheet.absoluteFill]} />,
    headerTitle: '',
    headerBackButtonMenuEnabled: true,
    headerTintColor: Assets.colors.jz2025ThemeColors.vividOrange,
}
const webScreenOptions = {
    headerShown: false,
}
const SpeakerLayout = () => {
    return (
        <Stack initialRouteName="index" screenOptions={Platform.OS === 'web' ? webScreenOptions : nativeScreenOptions}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="kids"/>
            <Stack.Screen name="reimbursement"/>
            <Stack.Screen name="tips"/>
        </Stack>
    )
}

export default SpeakerLayout;