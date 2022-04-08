//libraries
import { createContext, Suspense, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useIsFetching, useIsMutating } from 'react-query';

//services
import ErrorBoundary from '../status/ErrorBoundary';

//components
import ErrorModal from '../../components/common/modals/ErrorModal';
import SuccessModal from '../../components/common/modals/SuccessModal';
import FullLoader from '../../components/common/loaders/FullLoader';

const StatusContext = createContext();

function StatusProvider({ children }) {
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();
    return (
        <StatusContext.Provider
            value={{
                setSuccess: setSuccess,
                setError: setError,
            }}
        >
            <Suspense fallback={<FullLoader />}>
                <ErrorBoundary>
                    {children}
                    {isFetching + isMutating > 0 && <FullLoader />}
                    {error && <ErrorModal error={error} />}
                    {success && <SuccessModal success={success} />}
                </ErrorBoundary>
            </Suspense>
        </StatusContext.Provider>
    );
}

StatusProvider.propTypes = {
    children: PropTypes.node,
};

export const useStatusContext = () => useContext(StatusContext);

export default StatusProvider;
