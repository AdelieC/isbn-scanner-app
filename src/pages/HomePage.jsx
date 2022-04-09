//libraries
import { useTranslation } from 'react-i18next';
//services
//components
import SectionCard from '../components/reused/SectionCard';
import {
    ICON_CARD_BARCODE,
    ICON_CARD_INPUT,
    ICON_CARD_SEARCH,
} from '../services/globals/icons';

function HomePage() {
    const { t } = useTranslation(['home']);
    return (
        <>
            <div className="grow flex flex-wrap gap-12 justify-center items-center text-center w-full p-8 md:p-16">
                <SectionCard
                    text={t('scan-card.text')}
                    buttonText={t('scan-card.button')}
                    link={t('routes:scan-path')}
                    background={'bg-primaryLight'}
                    icon={ICON_CARD_BARCODE}
                />
                <SectionCard
                    text={t('input-card.text')}
                    buttonText={t('input-card.button')}
                    link={t('routes:input-path')}
                    background={'bg-primaryLight'}
                    icon={ICON_CARD_INPUT}
                />
                <SectionCard
                    text={t('search-card.text')}
                    buttonText={t('search-card.button')}
                    link={t('routes:search-path')}
                    background={'bg-primaryLight'}
                    icon={ICON_CARD_SEARCH}
                />
            </div>
        </>
    );
}

export default HomePage;
