//libraries
import coverPlaceholder from '../../assets/img/cover.svg';
import DetailsRow from './DetailsRow';
import LinkButton from './LinkButton';
import RatingStars from './RatingStars';
import RatingDetails from './RatingDetails';
import { getAuthorFullName } from '../../services/utils/BookDataFunctions';
import { ICON_VIEW_DETAILS } from '../../services/globals/icons';
import PropTypes from 'prop-types';
import { getSnippet } from '../../services/utils/StringFunctions';
import Book from '../../objects/Book';

//services

//components

//icon globals

function BookThumbnail({ book, optionalButton = null }) {
    return (
        <div className="flex flex-col gap-4 sm:gap-8 justify-around items-center bg-secondaryLight rounded-xl shadow-xl p-4 sm:p-8 w-full max-w-3xl h-max">
            <div
                className={
                    (book?.rating || optionalButton ? 'justify-between' : 'justify-end') +
                    ' flex gap-4 sm:gap-8 items-center w-full'
                }
            >
                {book?.rating && (
                    <div className="flex items-center gap-2">
                        <RatingStars rating={book?.rating} scale={5} />
                        <RatingDetails
                            rating={book?.rating}
                            scale={5}
                            nbRatings={book?.nbRatings}
                        />
                    </div>
                )}
                {optionalButton && optionalButton}
                <LinkButton
                    buttonText={'Details'}
                    link={'/book/' + (book?.isbn || book?.ean)}
                    linkState={{ book: book }}
                    icon={ICON_VIEW_DETAILS}
                    background={'bg-secondaryDark'}
                    textColor={'text-secondaryLight'}
                />
            </div>
            <div className="w-full flex gap-4 sm:gap-8 justify-between">
                <img
                    className="shadow-lg w-24 sm:w-44 h-40 sm:h-72 object-cover object-center"
                    src={book?.image || coverPlaceholder}
                    alt={book?.title}
                />
                <div className="grow flex flex-col justify-between gap-1 sm:gap-2 self-stretch">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-heading text-secondaryDark">
                        {book?.title}
                    </h3>
                    <p className="font-heading text-secondaryDark text-md sm:text-xl">
                        <span className="text-sm">Written by</span>{' '}
                        {book?.authors?.map((author, i) => {
                            return (
                                <span key={author.fullName}>
                                    {getAuthorFullName(author) +
                                        (i < book.authors.length - 1 ? ', ' : '')}
                                </span>
                            );
                        })}
                    </p>
                    <DetailsRow description={'Published'} value={book?.publishedAt} />
                    <DetailsRow description={'Publisher'} value={book?.publisher} />
                    <DetailsRow description={'EAN'} value={book?.ean} />
                    <DetailsRow description={'ISBN'} value={book?.isbn} />
                    {book?.priceRetail || book?.priceNew ? (
                        <>
                            <DetailsRow
                                description={'Price new'}
                                value={book?.priceRetail}
                            />
                            <DetailsRow
                                description={'Price retail'}
                                value={book?.priceNew}
                            />
                        </>
                    ) : (
                        <p className="font-heading text-sm">
                            No pricing data yet, sorry!
                        </p>
                    )}

                    {book?.synopsis?.length > 0 ? (
                        <DetailsRow value={'“' + getSnippet(book.synopsis) + '”'} />
                    ) : (
                        <p className="font-heading text-sm">No synopsis, sorry!</p>
                    )}
                </div>
            </div>
        </div>
    );
}

BookThumbnail.propTypes = {
    book: PropTypes.instanceOf(Book).isRequired,
    optionalButton: PropTypes.node,
};

export default BookThumbnail;
