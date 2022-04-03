//libraries
import PropTypes from 'prop-types';
import Book from '../../objects/Book';
import coverPlaceholder from '../../assets/img/cover.svg';
import DetailsRow from './DetailsRow';
import LinkButton from './LinkButton';

//services

//components

function BookThumbnail({ book }) {
    return (
        <div className="p-4 flex gap-4 justify-between ">
            <img
                className="shadow-lg w-20 sm:w-28 h-44 sm:h-52 object-cover object-center"
                src={book?.image || coverPlaceholder}
                alt={book?.title}
            />
            <div className="flex flex-col gap-2">
                <DetailsRow
                    description={'By'}
                    value={book?.authors.map((author, i) => {
                        return author + (i < book.authors.length ? ', ' : '');
                    })}
                />
                <DetailsRow description={'Published'} value={book?.publishedAt} />
                <DetailsRow description={'Publisher'} value={book?.publisher} />
                <DetailsRow description={'EAN'} value={book?.ean} />
                <DetailsRow description={'ISBN'} value={book?.isbn} />
                <DetailsRow value={book?.synopsis} />
                <LinkButton
                    buttonText={'Details'}
                    link={'/book/' + (book?.isbn || book?.ean)}
                    linkState={{ book: book }}
                />
            </div>
        </div>
    );
}

BookThumbnail.propTypes = {
    book: PropTypes.instanceOf(Book).isRequired,
};

export default BookThumbnail;
