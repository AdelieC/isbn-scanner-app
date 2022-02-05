import React from 'react';
import ErrorModal from '../../components/common/modals/ErrorModal';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error: error };
    }

    componentDidCatch(error, errorInfo) {
        //TODO : maybe transform the error so it's usable in erromodal or/and log it
    }

    render() {
        return this.state.hasError ? (
            <ErrorModal error={this.error} />
        ) : (
            this.props.children
        );
    }
}
