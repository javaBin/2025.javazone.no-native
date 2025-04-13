import { Assets } from '@/Assets';
import { SvgImage } from '@/UI';
import BlurView from 'expo-blur/build/BlurView';
import { Link, useGlobalSearchParams } from 'expo-router';
import { Dispatch, forwardRef, SetStateAction, useEffect, useImperativeHandle, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { LanguagePicker } from './LanguagePicker';

interface Props {
  toggleMenu: boolean;
  languageLoaded: boolean;
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
}

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const rollPositionStart = -215;
const paperHeightStart = 0;
export const animationDuration = 650;

/** Be very careful if you really have to change this file 🥹
 *  the animation positions, width, height, top and right attributes etc...
 *  are very exact and perfectly aligned as is
 */

export const PapyrusMenu = forwardRef(({ toggleMenu, languageLoaded, setToggleMenu }: Props, ref) => {
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
    <AnimatedBlurView tint="light" intensity={0} style={{ ...styles.drawer, height: paperHeightAnim }}>
      <SvgImage
        SVG={Assets.UI.PapyrusSheetOld}
        height={315}
        width={250}
        style={{ opacity: 1, position: 'absolute', right: 5, top: -19 }}
      />
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
        <Link href={{ pathname: `${lang}/volunteers` }} style={styles.drawerItem} onPress={onPressItem}>
          Volunteers
        </Link>
        <Link href={{ pathname: `${lang}/info` }} style={styles.drawerItem} onPress={onPressItem}>
          Info
        </Link>
        <View>{languageLoaded && <LanguagePicker />}</View>
      </View>
      <Animated.View
        style={{
          transform: [{ translateY: rollPositionAnim }],
        }}
      >
        <SvgImage
          SVG={Assets.UI.PapyrusRollOld}
          height={40}
          style={{ marginTop: 260, position: 'absolute', right: -0.5 }}
        />
      </Animated.View>
    </AnimatedBlurView>
  );
});
