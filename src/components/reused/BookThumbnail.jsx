//libraries
import PropTypes from 'prop-types';
import Book from '../../objects/Book';
import coverPlaceholder from '../../assets/img/cover.svg';
import DetailsRow from './DetailsRow';
import LinkButton from './LinkButton';
import RatingStars from './RatingStars';
import RatingDetails from './RatingDetails';
import { BsEyeglasses } from 'react-icons/bs';
import { getSnippet } from '../../services/utils/StringFunctions';
import { getAuthorFullName } from '../../services/utils/BookDataFunctions';

//services

//components

function BookThumbnail({ book }) {
    return (
        <div className="flex flex-col gap-4 justify-between bg-secondaryLight rounded-xl shadow-xl p-8">
            <div className="flex gap-4 justify-between items-center">
                <div className="flex items-center gap-2">
                    <RatingStars rating={book?.rating} scale={5} />{' '}
                    <RatingDetails
                        rating={book?.rating}
                        scale={5}
                        nbRatings={book?.nbRatings}
                    />
                </div>
                <LinkButton
                    buttonText={'Details'}
                    link={'/book/' + (book?.isbn || book?.ean)}
                    linkState={{ book: book }}
                    icon={<BsEyeglasses className="w-8 h-8" />}
                />
            </div>
            <div className="flex gap-4 justify-between">
                <img
                    className="shadow-lg w-20 sm:w-44 h-44 sm:h-72 object-cover object-center"
                    src={book?.image || coverPlaceholder}
                    alt={book?.title}
                />
                <div className="grow flex flex-col justify-between gap-2 self-stretch">
                    <p className="font-heading text-secondaryDark text-xl">
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
                    <DetailsRow description={'Price new'} value={book?.priceRetail} />
                    <DetailsRow description={'Price retail'} value={book?.priceNew} />
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
};

export default BookThumbnail;
