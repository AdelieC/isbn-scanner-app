//libraries

import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Book from '../objects/Book';
import useIsbn from '../services/hooks/useIsbn';
import coverPlaceholder from '../assets/img/cover.svg';
import DetailsRow from '../components/reused/DetailsRow';

function BookDetailsPage() {
    const { state } = useLocation();
    const { isbn } = useParams();
    const { book: bookFetched, setIsbn } = useIsbn();
    const initialBook = new Book(state?.book);
    const book = initialBook || bookFetched;

    useEffect(() => {
        if (!initialBook.title && isbn) setIsbn(isbn);
    }, [initialBook]);

    return (
        <div className="my-12 flex flex-col justify-around items-center grow gap-12 w-full max-w-4xl">
            <h1 className="text-4xl font-heading text-center text-secondaryDark">
                {book?.title}
            </h1>
            <section className="flex justify-between items-center gap-4 w-10/12 max-w-4xl ">
                <img
                    className="shadow-xl w-32 sm:w-44 h-52 sm:h-72 object-cover object-center"
                    src={book?.image || coverPlaceholder}
                    alt={book?.title}
                />
                <div className="flex flex-col gap-2">
                    <p className="font-heading text-secondaryDark text-xl">
                        Written by{' '}
                        {book?.authors.map((author, i) => {
                            return author + (i < book.authors.length - 1 ? ', ' : '');
                        })}
                    </p>
                    <p className="font-heading text-primaryDark text-sm">
                        Published on {book?.publishedAt}
                    </p>
                    <p className="font-heading text-primaryDark text-sm">
                        Editions {book?.publisher}
                    </p>
                </div>
            </section>
            <section className="flex flex-col justify-around items-center gap-4 w-10/12 max-w-4xl bg-primaryLight shadow-xl rounded-xl p-8">
                <h3 className="text-2xl font-heading text-center text-primaryDark">
                    Synopsis
                </h3>
                <DetailsRow value={book?.synopsis} />
            </section>
            <section className="flex flex-col justify-around items-center gap-4 w-10/12 max-w-4xl bg-primaryLight shadow-xl rounded-xl p-8">
                <h3 className="text-2xl font-heading text-center text-primaryDark">
                    Informations
                </h3>
                <DetailsRow
                    description={'Google rating'}
                    value={book?.rating + '/' + book?.nbRatings}
                />
                <DetailsRow description={'Width'} value={book?.dimensions?.width} />
                <DetailsRow description={'Height'} value={book?.dimensions?.height} />
                <DetailsRow
                    description={'Thickness'}
                    value={book?.dimensions?.thickness}
                />
                <DetailsRow description={'EAN'} value={book?.ean} />
                <DetailsRow description={'ISBN'} value={book?.isbn} />
            </section>
        </div>
    );
    /*
	this._title = '';
			this._authors = [];
			this._ean = '';
			this._isbn = '';
			this._publishedAt = '';

			this._dimensions = new Dimensions();
			this._nbPages = 0;
			this._language = '';
			this._image = '';
			this._publisher = '';
			this._synopsis = '';
			this._priceRetail = '';
			this._priceNew = '';
			this._googlePlayLink = '';
			this._genre = '';
			this._categories = [];
	 */
}

BookDetailsPage.propTypes = {};

export default BookDetailsPage;
