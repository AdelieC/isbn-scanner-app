import useIsbn from './useIsbn';
import { useEffect, useState } from 'react';

function useScan() {
    const [scanError, setScanError] = useState('');
    const { book, setIsbn, noResult } = useIsbn();
    const scan = () => {
        console.log('in scan');
        setIsbn('024578963');
        //todo: add logic
    };
    useEffect(() => {
        console.log('noresult', noResult);
    }, [noResult]);
    const stopScan = () => {};
    return { scan, stopScan, book, noResult };
}

useScan.propTypes = {};

export default useScan;
