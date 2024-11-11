import { HoldTheDate, ScreenTemplate } from "@/components";
import { useTranslation } from "react-i18next";

const Partner = () => {
    const { t } = useTranslation();

    return (
        <ScreenTemplate>
            <HoldTheDate subPageHeader={t('partner_information')} />
        </ScreenTemplate>
    );
}

export default Partner;