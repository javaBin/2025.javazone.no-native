import { Assets } from '@/Assets';
import { PapyrusRollSVG, PapyrusSheetSVG } from '@/UI';
import { Link, useGlobalSearchParams } from 'expo-router';
import React, { Dispatch, SetStateAction, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { LanguagePicker } from '@/components';

interface Props {
  toggleMenu: boolean;
  languageLoaded: boolean;
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
}

const rollPositionStart = -215;
const paperHeightStart = 0;
export const animationDuration = 650;

/** Be very careful if you really have to change this file 🥹
 *  the animation positions, width, height, top and right attributes etc...
 *  are very exact and perfectly aligned as is
 */
const PapyrusMenu = forwardRef(({ toggleMenu, languageLoaded, setToggleMenu }: Props, ref) => {
  const { lang } = useGlobalSearchParams();

  const styles = StyleSheet.create({
    drawer: {
      position: 'absolute',
      zIndex: 1,
      right: -1,
      top: 64, // default header height 64 - do not change! 💅🏼
      display: toggleMenu ? 'flex' : 'none',
      justifyContent: 'flex-start',
      overflow: 'hidden',
      width: 260,
      height: 355,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    drawerContent: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: 180,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingVertical: 10,
    },
    drawerItem: {
      color: Assets.colors.jz2025ThemeColors.darkBrown,
      paddingHorizontal: 20,
      marginVertical: 5,
      fontSize: 18,
      fontFamily: 'PlayfairDisplay_400Regular',
      textShadowColor: Assets.colors.brand.beige,
      textShadowOffset: { width: 0, height: 0.2 },
      textShadowRadius: 3,
    },
  });

  const rollPositionAnim = useRef(new Animated.Value(rollPositionStart)).current;
  const paperHeightAnim = useRef(new Animated.Value(paperHeightStart)).current;

  useEffect(() => {
    if (toggleMenu) {
      Animated.stagger(1, [
        Animated.timing(rollPositionAnim, {
          toValue: -0,
          duration: animationDuration,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(paperHeightAnim, {
          toValue: 298.5,
          duration: animationDuration,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [toggleMenu]);

  const closeAnimation = () => {
    Animated.stagger(1, [
      Animated.timing(rollPositionAnim, {
        toValue: rollPositionStart,
        duration: animationDuration,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(paperHeightAnim, {
        toValue: paperHeightStart,
        duration: animationDuration,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]).start();
  };

  useImperativeHandle(ref, () => ({
    closeAnimation,
  }));

  const onPressItem = () => {
    setTimeout(() => {
      closeAnimation();
      setTimeout(() => {
        setToggleMenu(false);
      }, animationDuration);
    }, 300);
  };

  return (
    <Animated.View style={{ ...styles.drawer, height: paperHeightAnim }}>
      <PapyrusSheetSVG height={315} width={250} style={{
        position: 'absolute', right: 5, top: -19,
        boxShadow: 'inset 0 0 2.5em rgba(108, 96, 92, 0.1), 0 0 0.3em rgba(108, 96, 92, 0.1)' }}/>

      <View style={styles.drawerContent}>
        <Link href={{ pathname: `${lang}/program` }} style={styles.drawerItem} onPress={onPressItem}>
          Program
        </Link>
        <Link href={{ pathname: `${lang}/partner` }} style={styles.drawerItem} onPress={onPressItem}>
          Partner
        </Link>
        <Link href={{ pathname: `${lang}/speaker` }} style={styles.drawerItem} onPress={onPressItem}>
          Speaker
        </Link>
        <Link href={{ pathname: `${lang}/speaker/kids` }} style={styles.drawerItem} onPress={onPressItem}>
          JavaZone Kids
        </Link>
        <Link href={{ pathname: `${lang}/speaker/awezone` }} style={styles.drawerItem} onPress={onPressItem}>
          AweZone
        </Link>
        <Link href={{ pathname: `${lang}/info` }} style={styles.drawerItem} onPress={onPressItem}>
          Info
        </Link>
        <View>{languageLoaded && <LanguagePicker />}</View>
      </View>

      <Animated.View
        style={{
          transform: [{ translateY: rollPositionAnim }],
          position: 'absolute', right: -1, top: 260
        }}
      >
        <PapyrusRollSVG height={40} width={260} />
      </Animated.View>
    </Animated.View>
  );
});

export default PapyrusMenu;