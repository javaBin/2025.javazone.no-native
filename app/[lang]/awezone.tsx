import { BulletListItem, ScreenTemplate } from '@/components';
import { SectionBox, SvgImage } from '@/UI';
import { Dimensions, Text, View } from 'react-native';
import { Assets } from '@/Assets';
import React from 'react';
import { Link } from 'expo-router';

const Awezone = () => {
  const isNotMobile = Dimensions.get('window').width > 450;
  // @ts-ignore
  return (
    <ScreenTemplate pageTitle={'AweZone Party'}>
      <SectionBox sectionTitle="">
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom:0 }}>
          {isNotMobile ? (
              <>
                <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
                <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
                <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
                <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
                <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
                <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
              </>
            )
            :
            (
            <>
              <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
              <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
              <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
            </>
          )}
        </View>
        <Text style={[Assets.styles.intro, { marginBottom: 16 }]}>
          AweZone is JavaZone's traditional party which takes place on Wednesday evening.
        </Text>
        <Text style={[Assets.styles.text, { marginBottom: 16 }]}>
          We will stay at Nova Spektrum the entire evening and the party offers a great chance to catch up with old
          friends, meet new ones, and also experience a great lineup of entertainment!
        </Text>
        <Text style={[Assets.styles.text, { marginBottom: 16 }]}>
          The bars open at <Text style={{ fontWeight: 'bold' }}>6:00 PM</Text> and we will be starting the party at{' '}
          <Text style={{ fontWeight: 'bold' }}>7:20 PM</Text>.
        </Text>

        <Text style={[Assets.styles.sectionSubTitle, { marginTop: 24, marginBottom: 8 }]}>Partner bands</Text>
        <Text style={[Assets.styles.text, { marginBottom: 8 }]}>
          Our concert room for the evening is Overflow, kicking it off with our partner bands in the following order:
        </Text>
        <BulletListItem text="8:00 PM - Kanban" />
        <BulletListItem text="8:30 PM - Endure" />
        <BulletListItem text="9:00 PM - Carsten Anker Band" textStyle={{marginBottom: 30}}/>

        <SvgImage SVG={Assets.icons.CaesarDj} height={100} width={100} />
        <Text style={[Assets.styles.sectionSubTitle, { marginTop: 24, marginBottom: 8 }]}>Expo DJ</Text>
        <Text style={[Assets.styles.text, { marginBottom: 16 }]}>
          DJ Sebastian Emes is playing in Expo from <Text style={{ fontWeight: 'bold' }}>7:20 PM</Text> – closing time.
          Feel free to ask for your favourite song.
        </Text>

        <SvgImage SVG={Assets.icons.Lyre} height={100} width={100} />
        <Text style={[Assets.styles.sectionSubTitle, { marginTop: 24, marginBottom: 8 }]}>Headliner band</Text>
        <Text style={[Assets.styles.text, { marginBottom: 16 }]}>
          This year's headliner band is <Text style={{ fontWeight: 'bold' }}>Ylvis</Text>, known for “The Fox”, “The
          Cabin” and many more. Join us for an epic show!
        </Text>
        <SvgImage SVG={Assets.icons.Caesar} height={100} width={100} />
        <Text style={[Assets.styles.sectionSubTitle, { marginTop: 24, marginBottom: 8 }]}>Cæsars Palace</Text>
        <Text style={[Assets.styles.text, { marginBottom: 8 }]}>
          Enjoy a small taste of Cæsars Palace as we open tables of Black Jack, Poker and Roulette for you to enjoy. In
          order to play you must visit our partners during the day to collect Duke Dosh.
        </Text>
        <Text style={[Assets.styles.text, { marginBottom: 8 }]}>
          If you are lucky enough to win, or have Duke Dosh to spare, you can donate your winnings to one or several of
          our selected charities:
        </Text>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 20,
          flexWrap: 'wrap',
          marginVertical: 16
        }}>
          <Link
            href={"https://endometriose.no/hjelp-oss-a-hjelpe/"}
            target={"_blank"}
            style={{
            width: 'auto',
            marginBottom: 16,
          }}>
            <View style={{
              alignItems: 'center',
              padding: 8,
              backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
              borderRadius: 8
            }}>
              <SvgImage SVG={Assets.icons.endometrioseforeningen} height={60} width={60} />
              <Text style={[Assets.styles.text, {
                textAlign: 'center',
                marginTop: 8,
                fontWeight: '500',
                fontSize: 16
              }]}>
                Endometrioseforeningen
              </Text>
              <Text style={[Assets.styles.text, {
                textAlign: 'center',
                color: '#666',
                marginTop: 2,
                fontSize: 12
              }]}>
                (Endometriosis Association)
              </Text>
            </View>
          </Link>

          <Link
            href={"https://kreftforeningen.no/stott-kreftforeningen/"}
            target={"_blank"}
            style={{
              width: 'auto',
              marginBottom: 16,
            }}>
            <View style={{
              alignItems: 'center',
              padding: 8,
              backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
              borderRadius: 8
            }}>
              <SvgImage SVG={Assets.icons.kreftforeningen} height={60} width={60} />
              <Text style={[Assets.styles.text, {
                textAlign: 'center',
                marginTop: 8,
                fontWeight: '500',
                fontSize: 16
              }]}>
                Kreftforeningen
              </Text>
              <Text style={[Assets.styles.text, {
                textAlign: 'center',
                color: '#666',
                marginTop: 2,
                fontSize: 13
              }]}>
                (Norwegian Cancer Society)
              </Text>
            </View>
          </Link>

          <Link
            href={"https://legerutengrenser.no/stott-oss/vipps/"}
            target={"_blank"}
            style={{
            width: 'auto',
            marginBottom: 16,
          }}>
            <View style={{
              alignItems: 'center',
              padding: 8,
              backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
              borderRadius: 8
            }}>
              <SvgImage SVG={Assets.icons.legerutengrenser} height={60} width={60} />
              <Text style={[Assets.styles.text, {
                textAlign: 'center',
                marginTop: 8,
                fontWeight: '500',
                fontSize: 16
              }]}>
                Leger Uten Grenser
              </Text>
              <Text style={[Assets.styles.text, {
                textAlign: 'center',
                color: '#666',
                marginTop: 2,
                fontSize: 12
              }]}>
                (Medecins Sans Frontieres)
              </Text>
            </View>
          </Link>
        </View>

        <Text style={[Assets.styles.text, { marginBottom: 16 }]}>
          You will be able to enjoy the drinks, stay in the chill-out areas, participate in activities, as well as
          mingle with the conference organizers, speakers, other participants, and our partners!
        </Text>
        <Text style={[Assets.styles.text, { marginBottom: 16 }]}>
          Oh, and one more thing! We will be serving good food in the evening as well. Some drinks are on us, some will
          be on our partners!
        </Text>
      </SectionBox>
    </ScreenTemplate>
  );
};

export default Awezone;