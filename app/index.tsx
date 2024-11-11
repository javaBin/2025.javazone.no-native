import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HoldTheDate, ScreenTemplate } from "@/components";

const Index = () => {
  const { top } = useSafeAreaInsets(); // can use this to define screen top based on platform

  return (
      <ScreenTemplate>
        <HoldTheDate />
        <StatusBar style="auto" />
      </ScreenTemplate>
  );
}

export default Index;