import PropTypes from 'prop-types';
import BookThumbnail from '../../reused/BookThumbnail';
import ActionButton from '../../reused/ActionButton';
import { ICON_RETRY } from '../../../services/globals/icons';
import { useTranslation } from 'react-i18next';
import Book from '../../../objects/Book';

ScannerBookThumbnail.propTypes = {
    book: PropTypes.instanceOf(Book),
    callback: PropTypes.func,
};

function ScannerBookThumbnail({ book, callback }) {
    const { t } = useTranslation('scanner');
    return (
        <BookThumbnail
            book={book}
            optionalButton={
                <ActionButton
                    text={t('book-thumbnail-button-text')}
                    action={callback}
                    textColor={'text-successLight'}
                    background={'bg-successDark'}
                    icon={ICON_RETRY}
                />
            }
        />
    );
}

export default ScannerBookThumbnail;
