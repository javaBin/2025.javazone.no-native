import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Assets } from '@/Assets';
import { ScreenTemplate } from '@/components';
import { SvgImage, SectionBox, LinkText } from '@/UI';
import { BulletListItem } from '@/components';
import React from 'react';
import { Link } from 'expo-router';

const ArrivalToNovaSpektrum = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScreenTemplate pageTitle="How to get to JavaZone at Nova Spektrum" shouldScrollToTop={true}>
      {/* Introduction */}
      <SectionBox sectionTitle="Location & Address">
        <Text style={Assets.styles.preface}>
          NOVA Spektrum is centrally located in the city of Lillestrøm, a short distance from Oslo Central Station and Oslo Airport Gardermoen.
          It is approximately 8 minutes walking distance from Lillestrøm train station.
        </Text>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionSubTitle}>Visiting Address</Text>
        <View style={styles.addressBox}>
          <Text style={[Assets.styles.text, styles.addressText]}>NOVA Spektrum</Text>
          <Text style={[Assets.styles.text, styles.addressText]}>Messeveien 8</Text>
          <Text style={[Assets.styles.text, styles.addressText]}>2004 Lillestrøm</Text>
        </View>
      </SectionBox>

      {/* Public Transportation */}
      <SectionBox sectionTitle="🚆 Public Transportation">
        <Text style={Assets.styles.sectionSubTitle}>Train</Text>
        <Text style={Assets.styles.text}>
          Vy has several departures per hour from both Oslo and Gardermoen. Travel time is only 11 minutes from Oslo S
          and 12 minutes from Oslo Airport.
        </Text>
        <View style={styles.importantBox}>
          <Text style={[Assets.styles.callout, styles.importantText]}>
            IMPORTANT: Use the trains marked R for the fastest travel time (RE11, R12, R14 etc.)
          </Text>
        </View>
        <Text style={Assets.styles.text}>Use the Ruter app to plan your journey to JavaZone.</Text>

        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionSubTitle}>Airport Train</Text>
        <Text style={Assets.styles.text}>
          The airport train takes 12 minutes from Oslo Airport to Lillestrøm.
        </Text>

        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionSubTitle}>Bus</Text>
        <Text style={Assets.styles.text}>
          From Lillestrøm bus terminal it takes approximately 8 minutes to walk to NOVA Spektrum.
        </Text>

        <View style={styles.linkContainer}>
          <LinkText
            title="📍 View walking directions on Google Maps"
            href="https://maps.app.goo.gl/6YCAZhLvBNHJA2rD6"
          />
        </View>
      </SectionBox>

      {/* Car/Motorcycle */}
      <SectionBox sectionTitle="🚗 Arriving by Car/Motorcycle">
        <Text style={Assets.styles.sectionSubTitle}>Parking Information</Text>
        <Text style={Assets.styles.text}>
          There are 2,200 parking spaces in front of the venue. All parking spaces are chargeable 24 hours a day.
        </Text>

        <View style={styles.importantBox}>
          <Text style={[Assets.styles.callout, styles.warningText]}>
            If your vehicle uses two parking spaces, you will be charged for both parking spaces
            (Mobile home, van, car with trailer etc).
          </Text>
        </View>

        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionSubTitle}>Parking Rates</Text>

        <View style={styles.pricingBox}>
          <Text style={Assets.styles.sectionSubTitle}>Vehicles under 3500 kg</Text>
          <Text style={Assets.styles.text}>(also applies to trailers/mopeds/scooters etc.)</Text>
          <BulletListItem text="NOK 72 per hour started" />
          <BulletListItem text="Maximum price for continuous parking within 24 hours: NOK 420" />
        </View>

        <View style={styles.pricingBox}>
          <Text style={Assets.styles.sectionSubTitle}>Vehicles over 3500 kg</Text>
          <BulletListItem text="NOK 144 per hour started" />
          <BulletListItem text="Maximum price for continuous parking within 24 hours: NOK 840" />
        </View>

        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionSubTitle}>Special Parking</Text>
        <BulletListItem text="Parking for the disabled is available in fields C and F, for a fee" />
        <BulletListItem text="10 charging stations for electric cars in field A, for a fee" />

        <Text style={Assets.styles.sectionSubTitle}>Payment Options</Text>
        <Text style={Assets.styles.text}>Autopay, card or mobile payment accepted.</Text>

        <View style={styles.linkContainer}>
          <LinkText
            title="📍 View parking location on Google Maps"
            href="https://maps.app.goo.gl/PRsnr73LnHxS5qwH8"
          />
        </View>
      </SectionBox>

      {/* Accessibility */}
      <SectionBox sectionTitle="♿ Accessibility">
        <Text style={Assets.styles.text}>
          NOVA Spektrum is adapted for wheelchair users. We have a limited number of wheelchairs available.
        </Text>

        <View style={styles.contactBox}>
          <Text style={Assets.styles.text}>
            Contact us prior to the conference if you need assistance:
          </Text>
          <Link
            href="mailto:javazone@macsimum.no"
            style={styles.linkText}
          >
            javazone@macsimum.no
          </Link>
        </View>
      </SectionBox>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  addressBox: {
    backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    borderLeftWidth: 4,
    borderLeftColor: Assets.colors.jz2025ThemeColors.vividOrange,
  },
  addressText: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 2,
  },
  importantBox: {
    backgroundColor: Assets.colors.jz2025ThemeColors.sheetOpacity,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    borderLeftWidth: 4,
    borderLeftColor: Assets.colors.jz2025ThemeColors.cyberYellow,
  },
  importantText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  warningText: {
    textAlign: 'left',
    fontSize: Dimensions.get('window').width > 768 ? 18 : 16,
  },
  pricingBox: {
    backgroundColor: Assets.colors.jz2025ThemeColors.linen,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    borderLeftWidth: 4,
    borderLeftColor: Assets.colors.jz2025ThemeColors.crimsonRed,
  },
  linkContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  contactBox: {
    backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: Assets.colors.jz2025ThemeColors.orangeYellow,
  },
  linkText: {
    color: Assets.colors.jz2025ThemeColors.darkRed,
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: Dimensions.get('window').width > 768 ? 20 : 18,
    textDecorationLine: 'underline',
    marginHorizontal: 3,
  }
});

export default ArrivalToNovaSpektrum;
