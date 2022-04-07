//libraries

//services

//components
import SectionCard from '../components/reused/SectionCard';
import {
    ICON_CARD_BARCODE,
    ICON_CARD_INPUT,
    ICON_CARD_SEARCH,
} from '../services/globals/icons';

function HomePage() {
    return (
        <>
            <div className="grow flex flex-wrap gap-12 justify-center items-center text-center w-full p-8 md:p-16">
                <SectionCard
                    text={'Get instant data on a book by scanning its barcode!'}
                    buttonText={'Scan a barcode'}
                    link={'/scan'}
                    background={'bg-primaryLight'}
                    icon={ICON_CARD_BARCODE}
                />
                <SectionCard
                    text={"Your book doesn't have a readable barcode?"}
                    buttonText={'Enter an ISBN/EAN'}
                    link={'/input'}
                    background={'bg-primaryLight'}
                    icon={ICON_CARD_INPUT}
                />
                <SectionCard
                    text={
                        'Search for a book by title, author, publisher,\n' +
                        '                    language etc...'
                    }
                    buttonText={'Search for a book'}
                    link={'/search/form'}
                    background={'bg-primaryLight'}
                    icon={ICON_CARD_SEARCH}
                />
            </div>
        </>
    );
}

export default HomePage;
