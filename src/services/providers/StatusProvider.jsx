//libraries
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useIsFetching, useIsMutating } from 'react-query';
import ErrorModal from '../../components/common/modals/ErrorModal';
import SuccessModal from '../../components/common/modals/SuccessModal';
import FullLoader from '../../components/common/loaders/FullLoader';
import ErrorBoundary from '../status/ErrorBoundary';

//TODO : add error boundary, loader and error/success modal
const StatusContext = createContext();

function StatusProvider({ children }) {
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();
    const isLoading = isFetching || isMutating;
    return (
        <StatusContext.Provider
            value={{
                setSuccess: setSuccess,
                setError: setError,
            }}
        >
            <ErrorBoundary>
                {children}
                {isLoading && <FullLoader />}
                {error && <ErrorModal error={error} />}
                {success && <SuccessModal success={success} />}
            </ErrorBoundary>
        </StatusContext.Provider>
    );
}

StatusProvider.propTypes = {
    children: PropTypes.node,
};

export const useStatusContext = () => useContext(StatusContext);

export default StatusProvider;
