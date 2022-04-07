//libraries
import { useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

//services
import useScan from '../services/hooks/useScan';
import useIsbn from '../services/hooks/useIsbn';

//components
import Scanner from '../components/specific/IsbnScanner/Scanner';
import BaseModal from '../components/common/modals/BaseModal';
import BookThumbnail from '../components/reused/BookThumbnail';
import IconButton from '../components/reused/IconButton';
import NoResultModal from '../components/common/modals/NoResultModal';
import ActionButton from '../components/reused/ActionButton';
import {
    ICON_LIGHT_OFF,
    ICON_LIGHT_ON,
    ICON_RETRY,
    ICON_RETURN_BUTTON,
    ICON_SWITCH_CAMERA,
} from '../services/globals/icons';

const TITLE = 'Scan an ISBN';
const NO_CAMERA_TEXT =
    'ISBN-scanner has not yet been granted permission to access your\n' +
    "                    camera. Try going to your browser's settings and authorising\n" +
    '                    ISBN-scanner to access your camera? <br />\n' +
    "                    If it doesn't change anything, try refreshing this page, or clearing\n" +
    "                    your browser's cache.";

//render functions
const renderScanBookResultThumbnail = (book, callback) => {
    return (
        <BookThumbnail
            book={book}
            optionalButton={
                <ActionButton
                    text={'Scan again'}
                    action={callback}
                    textColor={'text-successLight'}
                    background={'bg-successDark'}
                    icon={ICON_RETRY}
                />
            }
        />
    );
};

function IsbnScannerPage() {
    const { setTitle } = useOutletContext();
    const {
        stopScan,
        isScanning,
        lightIsOn,
        switchLight,
        changeCamera,
        result,
        cameras,
        hasLight,
        scan,
    } = useScan();
    const { book, setIsbn, reset: resetIsbnResult, noResult } = useIsbn();

    const retry = () => {
        resetIsbnResult();
        scan();
    };

    useEffect(() => {
        if (result) setIsbn(result);
    }, [result]);

    useEffect(() => {
        setTitle(TITLE);
        return () => stopScan();
    }, []);

    return (
        <div className="h-full w-full overflow-hidden relative bg-tertiaryDark">
            {isScanning && (
                <>
                    <div className="z-20 px-8 py-4 absolute top-0 w-full flex gap-4 justify-between items-center md:gap-8 text-primaryLight">
                        <Link to={'/home'} className="" onClick={stopScan}>
                            {ICON_RETURN_BUTTON}
                        </Link>
                        <div className="z-20 flex items-center justify-end gap-4 md:gap-8">
                            {hasLight && (
                                <IconButton
                                    callback={switchLight}
                                    color={'text-primaryLight'}
                                    icon={lightIsOn ? ICON_LIGHT_ON : ICON_LIGHT_OFF}
                                />
                            )}
                            {cameras.length > 1 && (
                                <IconButton
                                    callback={changeCamera}
                                    color={'text-primaryLight'}
                                    icon={ICON_SWITCH_CAMERA}
                                />
                            )}
                        </div>
                    </div>
                    <Scanner />
                </>
            )}

            {noResult && (
                <NoResultModal
                    callback={retry}
                    text={'There was no book with ' + result + ' ISBN in our sources.'}
                />
            )}

            {book?.title && (
                <BaseModal>{renderScanBookResultThumbnail(book, retry)}</BaseModal>
            )}

            {!noResult && !book.title && !isScanning && (
                <p className="text-tertiaryLight font-heading text-xl text-center">
                    {NO_CAMERA_TEXT}
                </p>
            )}
        </div>
    );
}

export default IsbnScannerPage;
