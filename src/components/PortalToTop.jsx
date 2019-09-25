import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const NODE_ID = 'portal-to-top';

class PortalToTop extends React.Component {
  node = null;

  componentDidMount() {
    this.findMountNode();
  }

  findMountNode() {
    const mountNode = document.getElementById(NODE_ID);
    this.node = mountNode;
    this.forceUpdate();
  }

  render() {
    if (!this.node) return null;

    return ReactDOM.createPortal(this.props.children, this.node);
  }
}

PortalToTop.propTypes = {
  children: PropTypes.node.isRequired,
};

export const PortalToTopPlaceholder = () => <div id={NODE_ID} />;

export default PortalToTop;
