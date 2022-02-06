//libraries

//services

//components

import SectionCard from '../components/reused/SectionCard';

function HomePage() {
    return (
        <>
            <div className="bg-hero bg-cover fixed top-0 left-0 text-secondaryLight">
                <div className="bg-black bg-opacity-25 w-full p-16 pt-32 flex flex-col items-center justify-between gap-8 shadow-innerXl">
                    <h1 className="font-heading text-6xl">Welcome to Isbn-Scanner!</h1>
                    <h3 className="text-3xl text-center">
                        A progressive web-app designed to get a book&apos;s data from its
                        barcode or its ISBN/EAN number (data available in pdf or csv
                        format).
                    </h3>
                </div>
            </div>
            <div className="flex flex-wrap gap-12 justify-center text-center w-full p-8 max-w-screen-xl mt-80">
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

export default HomePage;
