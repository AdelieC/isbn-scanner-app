//libraries

//services

//components
import SectionCard from '../components/reused/SectionCard';
import { FaBarcode } from 'react-icons/fa';
import { GiArchiveResearch, GiKeyboard } from 'react-icons/gi';

const ICONS_CLASSLIST = 'h-12 w-12 md:h-16 md:w-16';

function HomePage() {
    return (
        <>
            <div className="grow flex flex-wrap gap-12 justify-center items-center text-center w-full p-8 md:p-16">
                <SectionCard
                    text={'Get instant data on a book by scanning its barcode!'}
                    buttonText={'Scan a barcode'}
                    link={'/scan'}
                    background={'bg-primaryLight'}
                    icon={<FaBarcode className={ICONS_CLASSLIST} />}
                />
                <SectionCard
                    text={"Your book doesn't have a readable barcode?"}
                    buttonText={'Enter an ISBN/EAN'}
                    link={'/input'}
                    background={'bg-primaryLight'}
                    icon={<GiKeyboard className={ICONS_CLASSLIST} />}
                />
                <SectionCard
                    text={
                        'Search for a book by title, author, publisher,\n' +
                        '                    language etc...'
                    }
                    buttonText={'Search for a book'}
                    link={'/search/form'}
                    background={'bg-primaryLight'}
                    icon={<GiArchiveResearch className={ICONS_CLASSLIST} />}
                />
            </div>
        </>
    );
}

export default HomePage;
