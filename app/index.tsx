import { StatusBar } from 'expo-status-bar';
import { HoldTheDate, ScreenTemplate } from "@/components";

const Index = () => {

  return (
      <ScreenTemplate>
        <HoldTheDate />
        <StatusBar style="auto" />
      </ScreenTemplate>
  );
}

export default Index;