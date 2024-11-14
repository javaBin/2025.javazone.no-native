import { StatusBar } from 'expo-status-bar';
import { HoldTheDate, ScreenTemplate } from "@/components";
import { Assets } from "@/Assets";

const Index = () => {

  return (
      <ScreenTemplate>
        <HoldTheDate />
        <StatusBar style="dark" backgroundColor={Assets.colors.gradient.medium} />
      </ScreenTemplate>
  );
}

export default Index;