//libraries
import { useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

//services
import useScan from '../services/hooks/useScan';
import useIsbn from '../services/hooks/useIsbn';

//components
import Scanner from '../components/specific/IsbnScanner/Scanner';
import BaseModal from '../components/common/modals/BaseModal';
import IconButton from '../components/reused/IconButton';
import NoResultModal from '../components/common/modals/NoResultModal';
import {
    ICON_INFORMATIVE_MESSAGE,
    ICON_LIGHT_OFF,
    ICON_LIGHT_ON,
    ICON_RETURN_BUTTON,
    ICON_SWITCH_CAMERA,
} from '../services/globals/icons';
import { useTranslation } from 'react-i18next';
import ScannerBookThumbnail from '../components/specific/IsbnScanner/ScannerBookThumbnail';

//render functions

function IsbnScannerPage() {
    const { t } = useTranslation('scanner');
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
        setTitle(t('title'));
        return () => stopScan();
    }, []);

    return (
        <div className="h-full w-full flex flex-col justify-center items-center overflow-hidden relative bg-tertiaryDark text-tertiaryLight">
            {isScanning && (
                <>
                    <div className="z-20 px-4 sm:px-8 py-4 absolute top-0 w-full flex gap-4 justify-between items-center md:gap-8 text-primaryLight">
                        <Link to={'/'} className="" onClick={stopScan}>
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
                    text={t('no-result-part1') + result + t('no-result-part2')}
                />
            )}

            {book?.title && (
                <BaseModal>
                    <ScannerBookThumbnail book={book} callback={retry} />
                </BaseModal>
            )}

            {!noResult && !book.title && !isScanning && (
                <>
                    {ICON_INFORMATIVE_MESSAGE}
                    <p className="text-tertiaryLight font-heading text-base sm:text-xl text-center p-8 sm:p-28 max-w-3xl">
                        {t('no-camera-warning')}
                    </p>
                </>
            )}
        </div>
    );
}

export default IsbnScannerPage;
