//libraries
import { useEffect } from 'react';

//services
import useScan from '../services/hooks/useScan';

//components
import Scanner from '../components/specific/IsbnScanner/Scanner';
import BaseModal from '../components/common/modals/BaseModal';
import useIsbn from '../services/hooks/useIsbn';
import BookThumbnail from '../components/reused/BookThumbnail';
import IconButton from '../components/reused/IconButton';
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi';
import { MdOutlineCameraswitch, MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link, useOutletContext } from 'react-router-dom';

const ICONS_CLASSLIST = 'w-8 h-8 md:w-12 md:h-12';
const TITLE = 'Scan an ISBN';

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
    } = useScan();
    const { book, setIsbn, noResult } = useIsbn();

    useEffect(() => {
        if (result) setIsbn(result);
    }, [result]);

    useEffect(() => {
        setTitle(TITLE);
    }, []);

    return (
        <div className="h-full w-full overflow-hidden relative">
            {isScanning && (
                <>
                    <div className="z-20 px-8 py-4 absolute top-0 w-full flex gap-4 justify-between items-center md:gap-8 text-primaryLight">
                        <Link to={'/home'} className="" onClick={stopScan}>
                            <MdOutlineKeyboardBackspace className={ICONS_CLASSLIST} />
                        </Link>
                        <div className="z-20 flex items-center justify-end gap-4 md:gap-8">
                            {hasLight && (
                                <IconButton
                                    callback={switchLight}
                                    color={'text-primaryLight'}
                                    icon={
                                        lightIsOn ? (
                                            <HiLightBulb className={ICONS_CLASSLIST} />
                                        ) : (
                                            <HiOutlineLightBulb
                                                className={ICONS_CLASSLIST}
                                            />
                                        )
                                    }
                                />
                            )}
                            {cameras.length > 1 && (
                                <IconButton
                                    callback={changeCamera}
                                    color={'text-primaryLight'}
                                    icon={
                                        <MdOutlineCameraswitch
                                            className={ICONS_CLASSLIST}
                                        />
                                    }
                                />
                            )}
                        </div>
                    </div>
                    <Scanner />
                </>
            )}

            {/*noResult && (
                <BaseModal>
                    <p>Le livre n&apos;a pas été trouvé</p>
                </BaseModal>
            )*/}

            {book?.title && (
                <BaseModal>
                    <BookThumbnail book={book} />
                </BaseModal>
            )}
        </div>
    );
}

IsbnScannerPage.propTypes = {};

export default IsbnScannerPage;
