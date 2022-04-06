//libraries

import { useLocation, useOutletContext, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useIsbn from '../services/hooks/useIsbn';
import coverPlaceholder from '../assets/img/cover.svg';
import RatingStars from '../components/reused/RatingStars';
import DetailsRow from '../components/reused/DetailsRow';
import RatingDetails from '../components/reused/RatingDetails';
import { GoQuestion } from 'react-icons/go';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { getAuthorFullName } from '../services/utils/BookDataFunctions';
import Tag from '../components/reused/Tag';
import ExternalLinkButton from '../components/reused/ExternalLinkButton';

const getCategoryKeyword = (category) => {
    return category.split('/')[1];
};

const TITLE = 'Book details';

function BookDetailsPage() {
    const { setTitle } = useOutletContext();
    const { state } = useLocation();
    const { isbn } = useParams();
    const { book: bookFetched, setIsbn, reset } = useIsbn();
    const initialBook = state?.book;
    const [book, setBook] = useState(initialBook || bookFetched);

    useEffect(() => {
        if (!initialBook?.title && isbn) {
            setIsbn(isbn);
        }
    }, [initialBook]);

    useEffect(() => {
        if (bookFetched?.title) {
            setBook(bookFetched);
        }
    }, [bookFetched]);

    useEffect(() => {
        setTitle(TITLE);
        return () => reset();
    }, []);

    return (
        <div className="my-12 flex flex-col justify-around items-center grow gap-12 w-full max-w-4xl">
            <h1 className="text-4xl font-heading text-center text-secondaryDark">
                {book?.title}
            </h1>
            <section className="flex gap-8 w-10/12 max-w-4xl">
                <img
                    className="shadow-xl w-32 sm:w-44 h-52 sm:h-72 object-cover object-center"
                    src={book?.image || coverPlaceholder}
                    alt={book?.title}
                />
                <div className="grow flex flex-col justify-between gap-2 self-stretch">
                    <p className="font-heading text-secondaryDark text-2xl">
                        <span className="text-lg">Written by</span>{' '}
                        {book?.authors?.map((author, i) => {
                            return (
                                <span key={author.lastName}>
                                    {getAuthorFullName(author) +
                                        (i < book.authors.length - 1 ? ', ' : '')}
                                </span>
                            );
                        })}
                    </p>
                    <p className="font-heading text-primaryDark text-sm">
                        Published on {book?.publishedAt}
                    </p>
                    <p className="font-heading text-primaryDark text-sm">
                        Editions {book?.publisher}
                    </p>
                    <div className="flex gap-4 justify-between">
                        <div className="flex flex-col gap-2">
                            <p className="flex items-center gap-2 font-heading text-secondaryDark text-xl">
                                <span className="text-tertiaryDark text-xs">
                                    Price new :{' '}
                                </span>
                                {book?.priceNew || <GoQuestion className="" />}
                            </p>
                            <p className="flex items-center gap-2 font-heading text-secondaryDark text-xl">
                                <span className="text-tertiaryDark text-xs">
                                    Price retail :{' '}
                                </span>
                                {book?.priceRetail || <GoQuestion className="" />}
                            </p>
                            {book?.googlePlayLink && (
                                <ExternalLinkButton
                                    link={book?.googlePlayLink}
                                    buttonText={'Buy'}
                                    icon={<RiShoppingCart2Line />}
                                />
                            )}
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <RatingStars rating={book?.rating} scale={5} />
                            <RatingDetails
                                rating={book?.rating}
                                scale={5}
                                nbRatings={book?.nbRatings}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-around items-center gap-4 w-10/12 max-w-4xl">
                <ul className="flex justify-center items-center gap-4 flex-wrap">
                    {book?.categories?.map((category, i) => {
                        const keyword = getCategoryKeyword(category);
                        return (
                            <li key={category}>
                                <Tag
                                    link={'/category/' + keyword}
                                    text={category}
                                    index={i}
                                />
                            </li>
                        );
                    })}
                </ul>
            </section>
            <section className="flex flex-col justify-around items-center gap-4 w-10/12 max-w-4xl bg-primaryLight shadow-xl rounded-xl p-8">
                <h3 className="text-2xl font-heading text-center text-primaryDark">
                    Synopsis
                </h3>
                <DetailsRow value={'“' + book?.synopsis + '”'} />
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
                <DetailsRow description={'Genre'} value={book?.genre} />
                <DetailsRow description={'Language'} value={book?.language} />
                <DetailsRow description={'Number of pages'} value={book?.nbPages} />
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
