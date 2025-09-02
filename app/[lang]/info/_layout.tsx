import { BlurView } from 'expo-blur';
import { Platform, StyleSheet, View } from 'react-native';
import { Assets } from '@/Assets';
import { LanguagePicker } from '@/components';
import { Stack } from 'expo-router/stack';
import React from 'react';

const InfoLayout = () => {

  const nativeScreenOptions = {
    headerShown: true,
    headerTransparent: true,
    headerBackground: () => <BlurView tint="light" intensity={80} experimentalBlurMethod={'dimezisBlurView'} style={[StyleSheet.absoluteFill]} />,
    headerTitle: '',
    headerBackButtonMenuEnabled: true,
    headerTintColor: Assets.colors.jz2025ThemeColors.vividOrange,
    headerRight: () => (
      <View style={{marginRight: -15, marginTop: 5}}>
        <LanguagePicker />
      </View>
    ),
  }
  const webScreenOptions = {
    headerShown: false,
  }

  return (
    <Stack initialRouteName="index" screenOptions={Platform.OS === 'web' ? webScreenOptions : nativeScreenOptions}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="directions"/>
    </Stack>
  )
}

export default InfoLayout;