//libraries

//services

//components

import SectionCard from '../components/reused/SectionCard';

function HomePage(props) {
    return (
        <>
            <h1 className="font-heading text-4xl">Welcome to Isbn-Scanner!</h1>
            <div className="flex flex-wrap gap-12 justify-center text-center w-full p-8">
                <about className="w-full">
                    A progressive web-app designed to get a book&apos;s data from its
                    barcode or its ISBN/EAN number. Download the data found in PDF or csv
                    format.
                </about>
                <SectionCard
                    text={'Get instant data on a book by scanning its barcode!'}
                    buttonText={'Scan a barcode'}
                    buttonColor={'primaryLight'}
                    link={'/scan'}
                    background={'secondaryDark'}
                />
                <SectionCard
                    text={"Your book doesn't have a readable barcode?"}
                    buttonText={'Enter an ISBN/EAN'}
                    buttonColor={'primaryLight'}
                    link={'/input'}
                    background={'secondaryDark'}
                />
                <SectionCard
                    text={
                        'Search for a book by title, author, publisher,\n' +
                        '                    language etc...'
                    }
                    buttonText={'Search for a book'}
                    buttonColor={'primaryLight'}
                    link={'/search/form'}
                    background={'secondaryDark'}
                />
            </div>
        </>
    );
}

HomePage.propTypes = {};

export default HomePage;
