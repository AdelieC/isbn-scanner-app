import React, { useState } from 'react';
import useIsbn from './useIsbn';

function useScan(props) {
    const [isbn, setIsbn] = useState(null);
    const { bookFound, hasNoResult } = useIsbn(isbn);
    return { hasNoResult, bookFound };
}

useScan.propTypes = {};

export default useScan;
