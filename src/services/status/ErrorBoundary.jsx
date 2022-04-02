import React from 'react';
import PropTypes from 'prop-types';
import ErrorModal from '../../components/common/modals/ErrorModal';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: error !== null,
            error: error,
        });
        console.error(errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorModal error={this.error} />;
        } else {
            return this.props.children;
        }
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node,
};
