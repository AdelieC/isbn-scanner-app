//libraries

//services

//components
import SectionCard from '../components/reused/SectionCard';
import { FaBarcode } from 'react-icons/fa';
import { GiArchiveResearch, GiKeyboard } from 'react-icons/gi';

function HomePage() {
    return (
        <>
            <div className="bg-hero bg-cover fixed top-0 left-0 text-secondaryLight w-full">
                <div className="bg-black bg-opacity-25 w-full p-16 pt-40 flex flex-col items-center justify-between gap-8 shadow-innerXl">
                    <h1 className="font-heading text-6xl">Welcome to Isbn-Scanner!</h1>
                    <h3 className="text-3xl text-center">
                        A progressive web-app designed to get a book&apos;s data from its
                        barcode or its ISBN/EAN number (data available in pdf or csv
                        format).
                    </h3>
                </div>
            </div>
            <div className="flex flex-wrap gap-12 justify-center text-center w-full p-8 mt-88">
                <SectionCard
                    text={'Get instant data on a book by scanning its barcode!'}
                    buttonText={'Scan a barcode'}
                    link={'/scan'}
                    background={'bg-secondaryDark'}
                    icon={<FaBarcode className="h-20 w-20" />}
                />
                <SectionCard
                    text={"Your book doesn't have a readable barcode?"}
                    buttonText={'Enter an ISBN/EAN'}
                    link={'/input'}
                    background={'bg-successDark'}
                    icon={<GiKeyboard className="h-20 w-20" />}
                />
                <SectionCard
                    text={
                        'Search for a book by title, author, publisher,\n' +
                        '                    language etc...'
                    }
                    buttonText={'Search for a book'}
                    link={'/search/form'}
                    background={'bg-alertDark'}
                    icon={<GiArchiveResearch className="h-20 w-20" />}
                />
            </div>
        </>
    );
}

export default HomePage;
