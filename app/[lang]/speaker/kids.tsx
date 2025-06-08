import { BulletListItem, ScreenTemplate } from '@/components';
import { useTranslation } from 'react-i18next';
import { SectionBox, SvgImage } from '@/UI';
import { Platform, Text, View } from 'react-native';
import { Assets } from '@/Assets';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import LinkButton from '@/UI/LinkButton';

const workshops = [
  {
    title: 'BitBot XL - Selvkjørende bil',
    room: 'Ada',
    instructors: ['Bjørn Hamre', 'Thomas Nøkleby', 'Børge Nese'],
    checkInLink: ',',
    description: [
      'Bli med og utforsk bilen BitBot XL. På denne workshopen skal du lære å programmere bilens sensorer slik at den blir selvkjørende. Du skal blant annet lære å bruke avstandssensoren slik at bilen stopper selv og unngår å krasje i omgivelsene.',
      'Til slutt skal du programmere bilen til å følge en svart linje langs en bane vi tegner på gulvet. Hvor fort klarer du å få bilen til å kjøre, men likevel klare svingene? Kom og finn ut!',
    ],
    info: ['Maks deltagere: 20', 'Alder: 12 – 17 år', 'Språk: Norsk'],
    equipment: [
      'Egen PC eller Mac',
      'USB-C til USB-A overgang hvis datamaskinen ikke har USB-A-port',
      'Hvis du har Mac anbefaler vi å bruke Chrome som nettleser',
    ],
  },
  {
    title: 'Er du klar for å bygge din egen robot?',
    room: 'Exposalen',
    instructors: ['Jeroen Resoort', 'Michel Breevoort'],
    checkInLink: ',',
    description: [
      'MBot er en kun liten robot som du får kontrollere med en pc! I denne workshopen viser vi hvordan du kan sette den sammen og få den i gang, ved å bruke Python, et programmeringsspråk som er veldig bra og gøy! Du vil få roboten til å blinke med fargerike lys, lage gøyale lyder, og kjøre rundt som en racerbil.',
      'Først vil du lære det grunnleggende ved Python, og steg for steg programmere din mBot til å gjøre mer og mer. Ditt mål? Bygg en robot som kan kjøre selv og unngå hindringer som profesjonell!',
      'På veien kan du gjøre sideoppgaver og la kreativiteten gå løpsk. Vi har sett roboter som politi, racerbiler og til og med wrestlingkamper i tidligere workshoper!',
    ],
    info: ['Maks deltagere: 30', 'Alder: 12 - 17 år', 'Språk: Engelsk'],
    equipment: ['Egen PC med Windows 10+, Linux, eller MacOS'],
  },
  {
    title: 'Lær å designe 3D-figurer til 3D-printing',
    room: 'Hangout 2. etasje',
    instructors: ['Joachim Haagen Skeie'],
    checkInLink: ',',
    description: [
      'Kom å delta på workshop med 3D-printing! Lær å designe egne figurer i 3D-verktøyet Tinkercad, som kan printes ut på en av 3D-printerne. Vi tar med flere fargevalg på filamenter, slik at du kan velge farger selv!',
      'I tillegg til Tinkercad, kan du også bruke et kloss-bygge-program for å bygge figurer i en 3D-verden som ligner litt på Minecraft!',
    ],
    info: ['Maks deltagere: 12', 'Alder: 10+ år', 'Språk: Norsk'],
    equipment: ['Egen PC eller Mac'],
  },
];

const SpeakerKids = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <ScreenTemplate pageTitle={t('kids.title')}>
      <Text style={[Assets.styles.sectionSubTitle, { marginTop: -10, fontWeight: '500' }]}>
        En smakebit på voksenlivet
      </Text>
      <SectionBox sectionTitle={''}>
        <View style={{ marginHorizontal: 'auto', width: '80%' }}>
          <Text style={[Assets.styles.text]}>
            JavaZone inviterer alle barn og ungdommer på Rebel søndag 31. august. Vi kjører 3 parallelle workshoper; så
            det er noe for både barn og ungdommer.
          </Text>
          <Text style={[Assets.styles.text, { textAlign: 'center' }]}>Arrangementet er gratis for alle!</Text>
        </View>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10, marginTop: 20 }} />

        <View style={{ marginHorizontal: 'auto' }}>
          <Text style={Assets.styles.sectionSubTitle}>Tid & Sted</Text>
          <BulletListItem text={'Registrering fra kl. 10.30'} />
          <BulletListItem text={'Arrangement kl. 11.00 - 15.00'} />
          <BulletListItem text={'Rebel, Universitetsgata 2'} />
        </View>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionSubTitle}>Påmelding</Text>
        <Text style={Assets.styles.text}>
          Påmeldingen åpner mandag 30. juni kl. 12.00. Vi har et begrenset antall plasser, derfor er det viktig at du
          melder deg på før fristen 10. august kl. 12.00.
        </Text>
        <Text style={Assets.styles.text}>
          Har du ikke mulighet til å komme likevel, er det viktig at dette blir gitt beskjed om så raskt som mulig,
          siden det pleier å være ventelister på våre kurs.
        </Text>

        <Text style={Assets.styles.sectionSubTitle}>Utstyr</Text>
        <Text style={Assets.styles.text}>
          Kursene krever enten egen laptop eller nettbrett. Mer informasjon finner du på den enkelte workshop.
        </Text>

        <Text style={Assets.styles.sectionSubTitle}>Tre parallelle workshops</Text>
        <Text style={Assets.styles.text}>
          Det er 3 workshoper som går samtidig, så du kan bare være med på en workshop. Les mer om hver av dem under, og
          meld deg på den det ønsker å delta på. Vi serverer enkel mat underveis. Det er viktig at foreldre/foresatte
          også setter av tid til å være til stede hele dagen. Vi lager en egen sone for dem med kaffe.
        </Text>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionTitle}>Velkommen til en lærerik dag på Rebel!</Text>
      </SectionBox>
      <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

      <View
        style={{
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 20,
          marginTop: 20,
          width: '100%',
        }}
      >
        {workshops.map((workshop, index) => (
          <View
            key={index}
            style={{
              flexBasis: isMobile ? '100%' : '30%',
              maxWidth: isMobile ? '100%' : '50%',
              position: 'relative',
              alignItems: 'center',
              flex: 1, // Ensures all columns grow equally
              minHeight: 500, // Set to your desired minimum height
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                position: 'absolute',
                top: 5,
                left: 5,
                fontSize: isMobile ? 35 : 50,
                fontWeight: 'bold',
                color: Assets.colors.jz2025ThemeColors.vividOrange,
                zIndex: 1,
              }}
            >
              {index + 1}
            </Text>

            <SectionBox
              sectionTitle={workshop.title}
              style={
                !isMobile && {
                  height: 1500,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }
              }
            >
              <Text style={[Assets.styles.text, { marginHorizontal: 'auto' }]}>Rom: {workshop.room}</Text>

              <Text style={[Assets.styles.sectionSubTitle, { marginTop: 10 }]}>Instruktører</Text>
              <Text style={[Assets.styles.text, { textAlign: 'center' }]}>{workshop.instructors.join('\n')}</Text>

              <Text style={[Assets.styles.sectionSubTitle, { marginTop: 20 }]}>Om Workshopen</Text>
              {workshop.description.map((paragraph, i) => (
                <Text key={i} style={[Assets.styles.text, { marginTop: i === 0 ? 0 : 10 }]}>
                  {paragraph}
                </Text>
              ))}

              <Text style={[Assets.styles.sectionSubTitle, { marginTop: 20 }]}>Praktisk info</Text>
              <View style={{ marginHorizontal: 'auto' }}>
                {workshop.info.map((item, i) => (
                  <BulletListItem key={i} text={item} />
                ))}
              </View>

              <View style={{ marginHorizontal: 'auto' }}>
                <Text style={[Assets.styles.sectionSubTitle, { marginTop: 20 }]}>Utstyr</Text>
                {workshop.equipment.map((item, i) => (
                  <BulletListItem key={i} text={item} />
                ))}
              </View>

              <LinkButton
                disabled={true}
                href={''}
                title={'Påmelding åpner 30. juni kl. 12.00'}
                targetBlank={false}
                margin={isMobile ? 10 : 20}
                androidBlurPatch={Platform.OS === 'android'}
              />
            </SectionBox>
          </View>
        ))}
      </View>
    </ScreenTemplate>
  );
};

export default SpeakerKids;
