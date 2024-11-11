import { HoldTheDate, ScreenTemplate } from "@/components";
import { useTranslation } from "react-i18next";

const Speaker = () => {
    const { t } = useTranslation();

    return (
        <ScreenTemplate>
            <HoldTheDate subPageHeader={t('speaker_information')} />
        </ScreenTemplate>
    );
}

export default Speaker;