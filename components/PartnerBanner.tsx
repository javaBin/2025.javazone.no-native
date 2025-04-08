import { partners } from '@/assets/partners/partners';
import { View, StyleSheet, Dimensions, Animated, Platform } from 'react-native';
import { Link } from 'expo-router';
import { SvgImage} from '@/UI';

const screenWidth = Dimensions.get('window').width;
const adjustedScreenWidth = screenWidth > 768 ? screenWidth - 200 : screenWidth - 500;
const adjustedLogoSize = screenWidth > 768 ? 150 : 80;

export const PartnerBanner = () => {
  return (
    <View style={styles.wrapper}>
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
                  <SvgImage SVG={partner.logoUrl} height={adjustedLogoSize} width={adjustedLogoSize} />
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
    width: Platform.OS === "web" ? adjustedScreenWidth : '100%',
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
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2.5rem',
    height: '100%',
  },
  imageContainer: {
    width: Dimensions.get('window').width > 768 ? 200 : 100,
    objectFit: "contain",
    padding: 10
  },
  link: {
    width: Dimensions.get('window').width > 768 ? 200 : 100,
  },
});
