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
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi';
import { MdOutlineCameraswitch, MdOutlineKeyboardBackspace } from 'react-icons/md';
import NoResultModal from '../components/common/modals/NoResultModal';
import ActionButton from '../components/reused/ActionButton';

//css classes and text globals
const ICONS_CLASSLIST = 'w-8 h-8 md:w-12 md:h-12';
const TITLE = 'Scan an ISBN';

//icons globals
const LIGHT_ON_ICON = <HiLightBulb className={ICONS_CLASSLIST} />;
const LIGHT_OFF_ICON = <HiOutlineLightBulb className={ICONS_CLASSLIST} />;
const SWITCH_CAMERA_ICON = <MdOutlineCameraswitch className={ICONS_CLASSLIST} />;
const RETURN_BUTTON_ICON = <MdOutlineKeyboardBackspace className={ICONS_CLASSLIST} />;

//render functions
const renderScanBookResultThumbnail = (book, callback) => {
    return (
        <BookThumbnail
            book={book}
            optionalButton={
                <ActionButton
                    text={'Scan another'}
                    action={callback}
                    textColor={'text-secondaryLight'}
                    background={'bg-primaryDark'}
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
        <div className="h-full w-full overflow-hidden relative bg-primaryDark">
            {isScanning && (
                <>
                    <div className="z-20 px-8 py-4 absolute top-0 w-full flex gap-4 justify-between items-center md:gap-8 text-primaryLight">
                        <Link to={'/home'} className="" onClick={stopScan}>
                            {RETURN_BUTTON_ICON}
                        </Link>
                        <div className="z-20 flex items-center justify-end gap-4 md:gap-8">
                            {hasLight && (
                                <IconButton
                                    callback={switchLight}
                                    color={'text-primaryLight'}
                                    icon={lightIsOn ? LIGHT_ON_ICON : LIGHT_OFF_ICON}
                                />
                            )}
                            {cameras.length > 1 && (
                                <IconButton
                                    callback={changeCamera}
                                    color={'text-primaryLight'}
                                    icon={SWITCH_CAMERA_ICON}
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
                <p className="text-alertDark font-heading text-xl text-center">
                    ISBN-scanner has not yet been granted permission to access your
                    camera. Try going to your browser's settings and authorising
                    ISBN-scanner to access your camera? <br />
                    If it still doesn't change anything, try refreshing this page.
                </p>
            )}
        </div>
    );
}

export default IsbnScannerPage;
