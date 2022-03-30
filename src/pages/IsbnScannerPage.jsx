//libraries

import useScan from '../services/hooks/useScan';
import { useEffect } from 'react';

function IsbnScannerPage(props) {
    const { scan, bookFound, hasNoResult } = useScan();
    useEffect(() => {
        console.log(bookFound, hasNoResult);
        scan();
    }, [bookFound, hasNoResult]);
    return <></>;
}

IsbnScannerPage.propTypes = {};

export default IsbnScannerPage;
