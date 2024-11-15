import { HoldTheDate, ScreenTemplate } from "@/components";
import {Link} from "expo-router";

const Index = () => {
    return (
          <ScreenTemplate>
            <HoldTheDate />
              <Link href="/hhh" style={{color: "#ffffff"}}>test</Link>
        </ScreenTemplate>
    );
}

export default Index;