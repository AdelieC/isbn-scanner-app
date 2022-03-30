import { useState } from 'react';
import useIsbn from './useIsbn';

function useScan(props) {
    const [isbn, setIsbn] = useState(null);
    const { bookFound, hasNoResult } = useIsbn(isbn);
    const scan = () => {
        console.log('in scan');
        setIsbn('2820507544');
    };
    const stopScan = () => {};
    return { hasNoResult, bookFound, scan, stopScan };
}

useScan.propTypes = {};

export default useScan;
