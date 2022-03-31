//libraries

import useScan from '../services/hooks/useScan';
import { useEffect } from 'react';

function IsbnScannerPage(props) {
    const { scan, stopScan, book } = useScan();
    useEffect(() => {
        console.log('in scannerpage', book);
    }, [book]);
    useEffect(() => {
        scan();
        return () => stopScan();
    }, []);
    return <></>;
}

IsbnScannerPage.propTypes = {};

export default IsbnScannerPage;
