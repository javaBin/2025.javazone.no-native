import { ScreenTemplate, VideoPlayer } from '@/components';
import { useTranslation } from 'react-i18next';
import { Platform, StyleSheet, Text, View, ScrollView  } from 'react-native';
import { Assets } from '@/Assets';

const Partner = () => {
  const { t } = useTranslation();

  return (
    <ScreenTemplate>
      


      <ScrollView>
        <View style={styles.textinfo}>
      <h1>JavaZone 2025 Partner</h1>
      <p>Partner registration opens here January 15th 2025 at 10:00</p>
      <p>If you have any questions, please send us an e-mail at <a
                href="mailto:partner@java.no">partner@java.no</a>
            </p>
            <h2>Partner packages</h2>
            
            <div >
                    <h3>Standard package</h3>
                    <div>
                        <p >Price</p>
                        <p>100 000,- NOK ex VAT</p>
                    </div>
                    <p>6 square meters (3x2) with back and side wall, in the main conference hall.</p>

                    <p>Profiling</p>
                    <p>Logo with link on homepage and profiling in Oslo Spectrum</p>
                    <p >Stand ticket</p>
                    <p>4 flexible tickets for stand personnel.</p>
                    <p>Particiant tickets</p>
                    <p>Partner price on tickets for your colleagues</p>

                    <h3>Extended package</h3>
                    <p>Same as Standard upgraded to 12 square meters</p>
                    <div>
                        <p >Price</p>
                        <p>160 000,- NOK ex VAT</p>
                    </div>

                    <h3>Concept stand</h3>
                    <div>
                        <p>Price</p>
                        <p>190 000,- NOK ex VAT</p>
                    </div>
                    <p>All the benefits of the standard package.</p>
                    <p>Stand of approx. 70 square meters</p>
                    <p>Large space for showing off your own concept</p>

                    <h3>Restaurant stand</h3>
                    <div>
                        <p>Price</p>
                        <p>190 000,- NOK ex VAT</p>
                    </div>

                    <p>All the benefits of the standard package with a restaurant stand</p>
                    <p>Approx 80 square meters with a connected restaurant</p>
                    <p> Continuous food serving from your stand throughout the conference.</p>
                    <p>Menu in cooperation with event partners.</p>
            
            <h3>Partner tickets</h3>

          <p>You have four flexible stand tickets included in your partnership package. These are intended for stand
              personell, and does not give access to the talks. You must order tickets for everyone of you employees that
              wants to attend a talk (or if you have more than four who needs to be on the stand at once).</p>
              <div>
                        <p>Price</p>
                        <p>9 220,- NOK ex VAT incl ticket fee</p>
                    </div>              
          <p>Round robin distribution on tickets ordered by May 15th</p>
          <p>First come first served if tickets are still left after May 15th</p>
       </div> 
       </View>
       
       <View style={styles.content}>
        <Text style={styles.heading}>{t('partner.watch_partner_meeting')}</Text>        
        <VideoPlayer videoUrl={'https://player.vimeo.com/video/1038270530'} />
        
        </View>
      </ScrollView>
      
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  textinfo: {
    display: 'flex',
    marginHorizontal: 100,
    fontSize: 20

  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heading: {
    marginHorizontal: 20,
    fontSize: Platform.OS == 'web' ? 20 : 18,
    fontWeight: 'bold',
    color: Assets.colors.brand.cream,
    marginBottom: 20,
  },
});
export default Partner;
