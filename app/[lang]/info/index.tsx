import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Assets } from '@/Assets';
import { ScreenTemplate } from '@/components';
import { SvgImage, SectionBox, LinkText, LinkButton } from '@/UI';
import { BulletListItem } from '@/components';
import React from 'react';
import { Link, useGlobalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

const JavaZoneInfo = () => {
  const { t } = useTranslation();
  const screenWidth = Dimensions.get('window').width;

  // Calculate responsive image width with padding consideration
  const imageWidth = Math.min(screenWidth * 0.9, 610);

  return (
    <ScreenTemplate pageTitle="JavaZone 2025 - Everything You Need to Know" shouldScrollToTop={true}>
      {/* Introduction */}
      <SectionBox>
        <Text style={[styles.introText, { fontFamily: 'PlayfairDisplay_800ExtraBold' }]}>
          Less than a week left until #JavaZone 2025!
        </Text>
        <Text style={[Assets.styles.preface, styles.introText]}>
          We can't wait to see everyone again! Here's some useful info to make your visit to NOVA Spektrum smooth, safe,
          and fun 🧵
        </Text>
      </SectionBox>

      {/* Venue */}
      <SectionBox sectionTitle="🏛️ JAVAZONE VENUE">
        <Text style={Assets.styles.text}>
          NOVA Spektrum: Messeveien 6, 2004 Lillestrøm{'\n'}
          Just a short train ride (10–12 minutes) from Oslo Central Station and only 15 minutes from Oslo Airport
          Gardermoen, it's easy to reach whether you're coming from downtown Oslo or abroad.
        </Text>

        <View style={styles.addressBox}>
          <Text style={[Assets.styles.text, styles.addressText]}>NOVA Spektrum</Text>
          <Text style={[Assets.styles.text, styles.addressText]}>Messeveien 6, 2004 Lillestrøm, Norway</Text>
        </View>
      </SectionBox>

      {/* Public Transportation */}
      <SectionBox sectionTitle="PUBLIC TRANSPORTATION">
        <Text style={Assets.styles.sectionSubTitle}>Train (Vy)</Text>
        <Text style={Assets.styles.text}>
          11 min from Oslo S / 12 min from Oslo Airport. Take R-trains (RE11, R12, R14 etc.) for fastest travel. Use the
          Ruter app to plan.
        </Text>

        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionSubTitle}>Airport Express (Flytoget)</Text>
        <Text style={Assets.styles.text}>12 min from Oslo Airport to Lillestrøm.</Text>

        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionSubTitle}>Bus</Text>
        <Text style={Assets.styles.text}>Lillestrøm bus terminal is an 8-min walk to NOVA Spektrum.</Text>
      </SectionBox>

      {/* Parking */}
      <SectionBox sectionTitle="PARKING">
        <Text style={Assets.styles.text}>
          2,200 spaces in front of the venue (paid 24/7). Pay with Autopay, card or mobile.
        </Text>

        <View style={styles.pricingBox}>
          <Text style={Assets.styles.sectionSubTitle}>Vehicles &lt; 3,500 kg</Text>
          <Text style={Assets.styles.text}>NOK 72/hour, max NOK 420/24h</Text>
        </View>

        <View style={styles.pricingBox}>
          <Text style={Assets.styles.sectionSubTitle}>Vehicles &gt; 3,500 kg</Text>
          <Text style={Assets.styles.text}>NOK 144/hour, max NOK 840/24h</Text>
        </View>

        <BulletListItem text="♿ Disabled parking: fields C & F (paid)" />
        <BulletListItem text="🔌 10 EV charging stations in field A (paid)" />

        <View style={styles.linkContainer}>
          <Link href="https://maps.app.goo.gl/PRsnr73LnHxS5qwH8" style={styles.linkText}>
            📍View parking location on Google Maps
          </Link>
        </View>
      </SectionBox>

      <LinkButton href={`info/directions`} title={'More detailed directions & info'} />

      {/* Workshop Venue */}
      <SectionBox sectionTitle="🔨 WORKSHOP VENUE">
        <Text style={Assets.styles.text}>
          Workshops take place on Tuesday, 2 September (08:30–17:45) at Rebel Oslo, Universitetsgata 2. The venue is
          centrally located in Oslo, just a few minutes' walk from Nationaltheatret station.
        </Text>
      </SectionBox>

      {/* Accessibility */}
      <SectionBox sectionTitle="♿ ACCESSIBILITY">
        <Text style={Assets.styles.text}>
          NOVA Spektrum is wheelchair accessible. A limited number of wheelchairs are available – contact
          javazone@macsimum.no in advance if you need assistance.
        </Text>

        <View style={styles.contactBox}>
          <Link href="mailto:javazone@macsimum.no" style={styles.linkText}>
            javazone@macsimum.no
          </Link>
        </View>
      </SectionBox>

      {/* Weather */}
      <SectionBox sectionTitle="WEATHER">
        <Text style={Assets.styles.text}>
          Expect a bit of chill in Oslo – bring a sweater/hoodie, and maybe an umbrella.
        </Text>
      </SectionBox>

      {/* Currency */}
      <SectionBox sectionTitle="CURRENCY">
        <Text style={Assets.styles.text}>
          Norwegian krone (NOK). Almost all places accept Visa/Mastercard. Cash is rarely needed.
        </Text>
      </SectionBox>

      {/* Conference */}
      <SectionBox sectionTitle="CONFERENCE">
        <Text style={Assets.styles.text}>
          Program available here: JavaZone 2025. The reception opens at 8 am! (tea and coffee will be ready once you get
          inside ☕)
        </Text>
      </SectionBox>

      {/* Tickets */}
      <SectionBox sectionTitle="TICKETS">
        <Text style={Assets.styles.text}>
          Scan your ticket to get an access badge. Once scanned, it's locked to you – but until then, tickets can be
          transferred.
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/info/ticket.jpg')}
            style={[styles.heroImage, { width: imageWidth, height: 300, maxWidth: '100%' }]}
            resizeMode="cover"
          />
        </View>
      </SectionBox>

      {/* Food */}
      <SectionBox sectionTitle="FOOD">
        <Text style={Assets.styles.text}>
          We promise you will not walk around hungry. Our chefs will accommodate all food preferences and allergies.
          There will be some sweet stuff, too - but do not tell anyone!
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/info/food1.jpg')}
            style={[styles.heroImage, { width: imageWidth, height: 300, maxWidth: '100%' }]}
            resizeMode="cover"
          />
        </View>
      </SectionBox>

      {/* AweZone */}
      <SectionBox sectionTitle="AWEZONE: CELEBRATING THE COMMUNITY">
        <Text style={Assets.styles.text}>
          Join us Wednesday evening at NOVA Spektrum for JavaZone's traditional party – a night of music, fun, food, and
          community.
        </Text>
        <BulletListItem text="Bars open: 18:00" />
        <BulletListItem text="Party starts: 19:20" />

        <LinkButton href={`awezone`} title={"More details about AweZone"}/>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/info/party.jpeg')}
            style={[styles.heroImage, { width: imageWidth, height: 300, maxWidth: '100%' }]}
            resizeMode="cover"
          />
        </View>
      </SectionBox>

      {/* LuckyZone */}
      <SectionBox sectionTitle="LUCKYZONE: Cæsars Palace">
        <Text style={Assets.styles.text}>
          Try your luck at Blackjack, Poker, and Roulette! Collect Duke Dosh from our partners during the day to play.
          Winnings can be donated to:
        </Text>
        <Link href={'https://endometriose.no/hjelp-oss-a-hjelpe/'} style={styles.linkText} target={"_blank"}>
          <BulletListItem text="Endometrioseforeningen" />
        </Link>
        <Link href={'https://legerutengrenser.no/stott-oss/vipps/'} style={styles.linkText} target={"_blank"}>
          <BulletListItem text="Leger Uten Grenser" />
        </Link>
        <Link href={'https://kreftforeningen.no/stott-kreftforeningen/'} style={styles.linkText} target={"_blank"}>
          <BulletListItem text="Kreftforeningen" />
        </Link>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/info/luckyzone.png')}
            style={[styles.heroImage, { width: imageWidth, height: 300, maxWidth: '100%' }]}
            resizeMode="contain"
          />
        </View>
      </SectionBox>

      {/* Speakers */}
      <SectionBox sectionTitle="🗣️ SPEAKERS">
        <Text style={Assets.styles.text}>
          Please show up in your room 10 minutes before your talk starts to make sure your equipment works.
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/info/speaker.jpg')}
            style={[styles.heroImage, { width: imageWidth, height: 300, maxWidth: '100%' }]}
            resizeMode="cover"
          />
        </View>
      </SectionBox>

      {/* Code of Conduct */}
      <SectionBox sectionTitle="CODE OF CONDUCT">
        <Text style={Assets.styles.text}>
          The goal of the JavaZone conference is to be inclusive of the largest number of participants with varied and
          diverse backgrounds. If you experience any inappropriate behavior let us know.
        </Text>
        <View style={styles.linkContainer}>
          <Link href="https://java.no/principles" style={styles.linkText}>
            Full text: javaBin - Hjemmesiden til Javabrukerforeningen i Norge
          </Link>
        </View>
      </SectionBox>

      {/* Social Media */}
      <SectionBox sectionTitle="#️⃣ SOCIAL MEDIA">
        <Text style={Assets.styles.text}>
          Follow along with #javazone / #javazone2025.{'\n'}
          Our team will be active – reach out with comments & questions, and join the conversation!
        </Text>
      </SectionBox>

      {/* More Info */}
      <SectionBox sectionTitle="MORE INFO">
        <Text style={Assets.styles.text}>
          Any questions? Contact javazone@java.no, send us a DM, or catch us at the venue.
        </Text>
        <View style={styles.contactBox}>
          <Link href="mailto:javazone@java.no" style={styles.linkText}>
            javazone@java.no
          </Link>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/info/crew.jpg')}
            style={[styles.heroImage, { width: imageWidth, height: 300, maxWidth: '100%' }]}
            resizeMode="cover"
          />
        </View>
      </SectionBox>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  introText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').width > 768 ? 20 : 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
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
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    paddingHorizontal: 10,
  },
});

export default JavaZoneInfo;
