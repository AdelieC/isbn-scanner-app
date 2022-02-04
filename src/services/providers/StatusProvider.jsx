//libraries
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundary } from 'react-error-boundary';
import { useIsFetching, useIsMutating } from 'react-query';

//TODO : add error boundary, loader and error/success modal
const StatusContext = createContext();

function StatusProvider({ children }) {
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();
    const isLoading = isFetching || isMutating;
    return (
        <StatusContext.Provider value={{}}>
            <ErrorBoundary onError={(error) => setError(error)}>
                {children}
                {isLoading && <Loader />}
                {error && <ErrorModal error={error} setError={setError} />}
                {success && <SuccessModal success={success} setSuccess={setSuccess} />}
            </ErrorBoundary>
        </StatusContext.Provider>
    );
}

StatusProvider.propTypes = {
    children: PropTypes.node,
};

export const useStatusContext = () => useContext(StatusContext);

export default StatusProvider;
