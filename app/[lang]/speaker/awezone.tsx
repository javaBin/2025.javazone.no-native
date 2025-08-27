import { BulletListItem, ScreenTemplate } from '@/components';
import { SectionBox, SvgImage } from '@/UI';
import { Text, View } from 'react-native';
import { Assets } from '@/Assets';
import React from 'react';

const Awezone = () => {
  // @ts-ignore
  return (
    <ScreenTemplate pageTitle={'AweZone Party'}>
      <SectionBox sectionTitle="">
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom:0 }}>
          {/* 8 Vine icons, filling the row with no gaps and height 80px */}
          <SvgImage SVG={Assets.icons.Vine} style={{ flex: 1, height: 80, width: undefined, margin: 0, padding: 0 }} />
          <SvgImage SVG={Assets.icons.Vine} style={{ flex: 1, height: 80, width: undefined, margin: 0, padding: 0 }} />
          <SvgImage SVG={Assets.icons.Vine} style={{ flex: 1, height: 80, width: undefined, margin: 0, padding: 0 }} />
          <SvgImage SVG={Assets.icons.Vine} style={{ flex: 1, height: 80, width: undefined, margin: 0, padding: 0 }} />
          <SvgImage SVG={Assets.icons.Vine} style={{ flex: 1, height: 80, width: undefined, margin: 0, padding: 0 }} />
          <SvgImage SVG={Assets.icons.Vine} style={{ flex: 1, height: 80, width: undefined, margin: 0, padding: 0 }} />
          <SvgImage SVG={Assets.icons.Vine} style={{ flex: 1, height: 80, width: undefined, margin: 0, padding: 0 }} />
          <SvgImage SVG={Assets.icons.Vine} style={{ flex: 1, height: 80, width: undefined, margin: 0, padding: 0 }} />
        </View>
        <Text style={[Assets.styles.intro, { marginBottom: 16 }]}>
          AweZone is JavaZone's traditional party which takes place on Wednesday evening. {'\u{1F483}'}
          {'\u{1F57A}'}
          {'\u{1FAA9}'}
        </Text>
        <Text style={[Assets.styles.text, { marginBottom: 16 }]}>
          We will stay at Nova Spektrum the entire evening and the party offers a great chance to catch up with old
          friends, meet new ones, and also experience a great lineup of entertainment!
        </Text>
        <Text style={[Assets.styles.text, { marginBottom: 16 }]}>
          The bars open at <Text style={{ fontWeight: 'bold' }}>6:00 PM</Text> and we will be starting the party at{' '}
          <Text style={{ fontWeight: 'bold' }}>7:20 PM</Text>.
        </Text>
        <SvgImage SVG={Assets.icons.Lyre} height={100} width={100} />
        <Text style={[Assets.styles.sectionSubTitle, { marginTop: 24, marginBottom: 8 }]}>Partner bands</Text>
        <Text style={[Assets.styles.text, { marginBottom: 8 }]}>
          Our concert room for the evening is Overflow, kicking it off with our partner bands in the following order:
        </Text>
        <BulletListItem text="8:00 PM - Kanban" />
        <BulletListItem text="8:30 PM - Endure" />
        <BulletListItem text="9:00 PM - Carsten Anker Band" />

        <Text style={[Assets.styles.sectionSubTitle, { marginTop: 24, marginBottom: 8 }]}>Expo DJ</Text>
        <Text style={[Assets.styles.text, { marginBottom: 16 }]}>
          DJ Sebastian Emes is playing in Expo from <Text style={{ fontWeight: 'bold' }}>7:20 PM</Text> – closing time.
          Feel free to ask for your favourite song.
        </Text>

        <Text style={[Assets.styles.sectionSubTitle, { marginTop: 24, marginBottom: 8 }]}>Headliner band</Text>
        <Text style={[Assets.styles.text, { marginBottom: 16 }]}>
          This year's headliner band is <Text style={{ fontWeight: 'bold' }}>Ylvis</Text>, known for “The Fox”, “The
          Cabin” and many more. Join us for an epic show!
        </Text>
        <SvgImage SVG={Assets.icons.Caesar} height={90} width={90} />
        <Text style={[Assets.styles.sectionSubTitle, { marginTop: 24, marginBottom: 8 }]}>Cæsars Palace</Text>
        <Text style={[Assets.styles.text, { marginBottom: 8 }]}>
          Enjoy a small taste of Cæsars Palace as we open tables of Black Jack, Poker and Roulette for you to enjoy. In
          order to play you must visit our partners during the day to collect Duke Dosh.
        </Text>
        <Text style={[Assets.styles.text, { marginBottom: 8 }]}>
          If you are lucky enough to win, or have Duke Dosh to spare, you can donate your winnings to one or several of
          our selected charities:
        </Text>
        <BulletListItem text="Endometrioseforeningen (Endometriosis Association)" />
        <BulletListItem text="Leger Uten Grenser (Medecins Sans Frontieres)" />
        <BulletListItem text="Kreftforeningen (Norwegian Cancer Society)" />

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
