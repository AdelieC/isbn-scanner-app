//libraries
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

//services
import { getAuthorFullName } from '../../services/utils/BookDataFunctions';
import { ICON_VIEW_DETAILS } from '../../services/globals/icons';
import { CLASSLIST_COVER_IMAGE } from '../../services/globals/classlists';
import { getSnippet } from '../../services/utils/StringFunctions';
import Book from '../../objects/Book';

//components
import DetailsRow from './DetailsRow';
import LinkButton from './LinkButton';
import RatingStars from './RatingStars';
import RatingDetails from './RatingDetails';
import coverPlaceholder from '../../assets/img/cover.svg';

function BookThumbnail({ book, optionalButton = null, passDataToDetailsPage = true }) {
    const { t } = useTranslation('book-details');
    return (
        <div className="flex flex-col gap-4 sm:gap-8 justify-around items-center bg-secondaryLight rounded-xl shadow-xl p-4 sm:p-8 w-full max-w-3xl h-max">
            <div
                className={
                    (book?.rating || optionalButton
                        ? 'sm:justify-between'
                        : 'sm:justify-end') +
                    ' justify-center flex flex-wrap-reverse gap-4 sm:gap-8 items-center w-full'
                }
            >
                {book?.rating && (
                    <div className="flex flex-wrap justify-center items-center gap-2">
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
                    buttonText={t('button-text')}
                    link={'/' + t('routes:paths.book') + (book?.isbn || book?.ean)}
                    linkState={{ book: passDataToDetailsPage ? book : null }}
                    icon={ICON_VIEW_DETAILS}
                    background={'bg-secondaryDark'}
                    textColor={'text-secondaryLight'}
                />
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center sm:justify-between">
                <img
                    className={CLASSLIST_COVER_IMAGE}
                    src={book?.image || coverPlaceholder}
                    alt={book?.title}
                />
                <div className="grow flex flex-col justify-between gap-1 sm:gap-2 self-stretch">
                    <h3 className="text-xl text-center sm:text-left sm:text-2xl md:text-3xl font-heading text-secondaryDark">
                        {book?.title}
                    </h3>
                    <p className="text-center sm:text-left font-heading text-secondaryDark text-base sm:text-xl">
                        <span className="text-sm mr-2">Written by</span>
                        {book?.authors?.map((author, i) => {
                            return (
                                <span key={author.fullName}>
                                    {getAuthorFullName(author) +
                                        (i < book.authors.length - 1 ? ', ' : '')}
                                </span>
                            );
                        })}
                    </p>
                    <DetailsRow
                        description={t('published-on')}
                        value={book?.publishedAt}
                    />
                    <DetailsRow description={t('editions')} value={book?.publisher} />
                    <DetailsRow description={'EAN'} value={book?.ean} />
                    <DetailsRow description={'ISBN'} value={book?.isbn} />
                    {book?.priceRetail || book?.priceNew ? (
                        <>
                            <DetailsRow
                                description={t('price-new')}
                                value={book?.priceRetail}
                            />
                            <DetailsRow
                                description={t('price-retail')}
                                value={book?.priceNew}
                            />
                        </>
                    ) : (
                        <p className="font-heading text-sm">{t('no-price')}</p>
                    )}

                    {book?.synopsis?.length > 0 ? (
                        <DetailsRow value={getSnippet(book.synopsis)} />
                    ) : (
                        <p className="font-heading text-sm">{t('no-synopsis')}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

BookThumbnail.propTypes = {
    book: PropTypes.instanceOf(Book).isRequired,
    optionalButton: PropTypes.node,
    passDataToDetailsPage: PropTypes.bool,
};

export default BookThumbnail;
