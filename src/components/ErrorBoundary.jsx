import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError = () => {
    return { hasError: true };
  };

  render() {
    const { hasError } = this.state;

    if (hasError) return <div>ERROR HAPPENED</div>;

    return <div>{this.props.children}</div>;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
