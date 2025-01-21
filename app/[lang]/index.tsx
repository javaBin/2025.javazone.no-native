import { Hero, HoldTheDate, ScreenTemplate, WelcomeSection } from '@/components';
import { Dimensions } from 'react-native';

const Index = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScreenTemplate>
      <Hero />
      <WelcomeSection />
    </ScreenTemplate>
  );
};

export default Index;
