import { Hero, ScreenTemplate, WelcomeSection } from '@/components';
import {View} from "react-native";

const Index = () => {
  return (
    <ScreenTemplate>
        <View>
          <Hero />
          <WelcomeSection />
        </View>
    </ScreenTemplate>
  );
};

export default Index;
