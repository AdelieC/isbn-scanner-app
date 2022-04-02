//libraries
import { useEffect } from 'react';

//services
import useScan from '../services/hooks/useScan';

//components
import IconButton from '../components/reused/IconButton';
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi';
import Scanner from '../components/specific/IsbnScanner/Scanner';
import { MdOutlineCameraswitch } from 'react-icons/md';
import BaseModal from '../components/common/modals/BaseModal';
import useIsbn from '../services/hooks/useIsbn';
import BookThumbnail from '../components/reused/BookThumbnail';

function IsbnScannerPage() {
    const {
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

    return (
        <div className="h-screen w-screen overflow-hidden">
            {isScanning && (
                <>
                    <div className="z-20 p-8 absolute top-28 w-full flex items-center justify-end gap-4">
                        {cameras.length > 1 && (
                            <IconButton
                                callback={changeCamera}
                                color={'text-primaryLight'}
                                icon={<MdOutlineCameraswitch className="w-8 h-8" />}
                            />
                        )}
                        {hasLight && (
                            <IconButton
                                callback={switchLight}
                                color={'text-primaryLight'}
                                icon={
                                    lightIsOn ? (
                                        <HiLightBulb className="w-12 h-12" />
                                    ) : (
                                        <HiOutlineLightBulb className="w-12 h-12" />
                                    )
                                }
                            />
                        )}
                    </div>
                    <Scanner />
                </>
            )}

            {noResult && (
                <BaseModal>
                    <p>Le livre n&apos;a pas été trouvé</p>
                </BaseModal>
            )}

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
