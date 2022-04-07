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
import {
    CLASSLIST_COVER_IMAGE,
    CLASSLIST_H1,
    CLASSLIST_H3,
    CLASSLIST_ROUNDED_SECTION,
} from '../services/globals/classlists';

const getCategoryKeyword = (category) => {
    const categoryArray = category.split('/');
    return categoryArray.length > 1 ? categoryArray[1].trim() : category.trim();
};

const TITLE = 'Book details';
const RATING_SCALE = 5;

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
        <div className="my-8 sm:my-12 flex flex-col justify-around items-center grow gap-8 sm:gap-12 w-full max-w-4xl">
            <h1 className={CLASSLIST_H1 + 'text-secondaryDark'}>{book?.title}</h1>
            <section className="flex flex-col sm:flex-row justify-center items-center gap-8 w-10/12 max-w-4xl">
                <img
                    className={CLASSLIST_COVER_IMAGE}
                    src={book?.image || coverPlaceholder}
                    alt={book?.title}
                />
                <div className="grow flex flex-col justify-between gap-2 self-stretch">
                    <p className="text-xl text-center sm:text-left sm:text-2xl md:text-3xl font-heading text-secondaryDark">
                        <span className="text-base sm:text-lg">Written by</span>{' '}
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
                    <div className="flex flex-col sm:flex-row gap-4 justify-between">
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
                                scale={RATING_SCALE}
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
                                    text={keyword}
                                    index={i}
                                />
                            </li>
                        );
                    })}
                </ul>
            </section>
            <section className={CLASSLIST_ROUNDED_SECTION}>
                <h3 className={CLASSLIST_H3}>Synopsis</h3>
                <DetailsRow value={'“' + book?.synopsis + '”'} />
            </section>
            <section className={CLASSLIST_ROUNDED_SECTION}>
                <h3 className={CLASSLIST_H3}>Informations</h3>
                <DetailsRow
                    description={'Google rating'}
                    value={book?.rating ? book?.rating + '/' + RATING_SCALE : ''}
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
}

BookDetailsPage.propTypes = {};

export default BookDetailsPage;
