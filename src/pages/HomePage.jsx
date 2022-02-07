//libraries

//services

//components
import SectionCard from '../components/reused/SectionCard';
import { FaBarcode } from 'react-icons/fa';
import { GiArchiveResearch, GiKeyboard } from 'react-icons/gi';

function HomePage() {
    return (
        <>
            <div className="bg-hero bg-cover bg-fixed dark:text-secondaryLight text-primaryDark w-full h-50vh">
                <div className="dark:bg-black bg-primaryLight bg-opacity-30 w-full flex items-stretch justify-between gap-8 shadow-innerXl h-full">
                    <div className="p-16 pt-44 flex flex-col justify-center text-right w-1/2">
                        <h2 className="font-heading text-8xl">WELCOME TO</h2>
                        <h1 className="font-heading text-6xl">isbn-SCANNER!</h1>
                    </div>
                    <h3 className="text-3xl w-1/2 bg-secondaryDark text-secondaryLight p-16 pt-44 flex flex-col justify-center">
                        A progressive web-app designed to get a book&apos;s data from its
                        barcode or its ISBN/EAN number.
                        <br />
                        (Data available in pdf or csv format)
                    </h3>
                </div>
            </div>
            <div className="flex flex-wrap gap-12 justify-center text-center w-full p-16">
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
                    background={'bg-tertiaryDark'}
                    icon={<GiArchiveResearch className="h-20 w-20" />}
                />
            </div>
        </>
    );
}

export default HomePage;
