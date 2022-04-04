//libraries
import PropTypes from 'prop-types';
import Book from '../../objects/Book';
import coverPlaceholder from '../../assets/img/cover.svg';
import DetailsRow from './DetailsRow';
import LinkButton from './LinkButton';
import RatingStars from './RatingStars';
import RatingDetails from './RatingDetails';

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
                        Written by{' '}
                        {book?.authors.map((author, i) => {
                            return author + (i < book.authors.length - 1 ? ', ' : '');
                        })}
                    </p>
                    <DetailsRow description={'Published'} value={book?.publishedAt} />
                    <DetailsRow description={'Publisher'} value={book?.publisher} />
                    <DetailsRow description={'EAN'} value={book?.ean} />
                    <DetailsRow description={'ISBN'} value={book?.isbn} />
                    <div className="flex gap-4 justify-between">
                        <div className="flex flex-col gap-2">
                            <p className="flex items-center gap-2 font-heading text-secondaryDark text-xl">
                                <span className="text-tertiaryDark text-xs">
                                    Price new :{' '}
                                </span>
                                {book?.priceNew || 'unknown'}
                            </p>
                            <p className="flex items-center gap-2 font-heading text-secondaryDark text-xl">
                                <span className="text-tertiaryDark text-xs">
                                    Price retail :{' '}
                                </span>
                                {book?.priceRetail || 'unknown'}
                            </p>
                        </div>
                        <DetailsRow value={book?.synopsis} />
                    </div>
                </div>
            </div>
        </div>
    );
}

BookThumbnail.propTypes = {
    book: PropTypes.instanceOf(Book).isRequired,
};

export default BookThumbnail;
