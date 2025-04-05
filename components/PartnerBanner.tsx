import { partners } from '@/assets/partners/partners';
import {Text, View, StyleSheet, Dimensions, Animated, Platform} from 'react-native';
import { Link } from 'expo-router';
import { SvgImage } from '@/UI';

interface Partner {
  homepageUrl: string;
  name: string;
  logoUrl: string;
}

interface Props {
  partners: Partner[];
}

const screenWidth = Dimensions.get('window').width;
const adjustedScreenWidth = screenWidth > 768 ? screenWidth - 200 : screenWidth - 500;


export default function PartnerBanner() {
  return (
    <View style={Platform.OS === 'web' ? styles.wrapper : {}}>
      <View style={styles.partnerContainer}>
        {[...partners]
          .sort(() => Math.random() - 0.5)
          .map((partner) => {
            const scaleValue = new Animated.Value(1);

            const handleMouseEnter = () => {
              Animated.spring(scaleValue, {
                toValue: 1.4,
                useNativeDriver: true,
              }).start();
            };

            const handleMouseLeave = () => {
              Animated.spring(scaleValue, {
                toValue: 1,
                useNativeDriver: true,
              }).start();
            };

            return (
              <Animated.View
                key={partner.name}
                style={[
                  styles.imageContainer,
                  {
                    transform: [{ scale: scaleValue }],
                  },
                ]}
                onPointerEnter={handleMouseEnter}
                onPointerLeave={handleMouseLeave}
              >
                <Link target={"_blank"} href={partner.homepageUrl} style={styles.link}>
                  <SvgImage SVG={partner.logoUrl} height={80} />
                </Link>
              </Animated.View>
            );
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: adjustedScreenWidth,
    overflow: 'hidden',
    flexWrap: 'nowrap',
    position: 'relative',
    marginBottom: 40,
    marginTop: 20,
  },
  title: {
    color: 'black',
    fontSize: Dimensions.get('window').width >= 768 ? 50 : 35,
    lineHeight: 150,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Cinzel_400Regular',
  },
  partnerContainer: {
    display: 'flex',
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2.5rem',
    width: adjustedScreenWidth, // Use screen width directly
    height: '100%',
  },
  imageContainer: {
    width: 100,
  },
  link: {
    width: '100%',
    height: '100%',
  },
});
