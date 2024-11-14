import { HoldTheDate, ScreenTemplate } from "@/components";
import { useTranslation } from "react-i18next";

const Program = () => {
    const { t } = useTranslation();

    return (
        <ScreenTemplate>
            <HoldTheDate subPageHeader={t('program_information')} />
        </ScreenTemplate>
    );
}

export default Program;