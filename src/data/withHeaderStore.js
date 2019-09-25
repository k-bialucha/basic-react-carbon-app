import React from 'react';

import { Container } from 'flux/utils';

import HeaderActions from './HeaderActions';
import HeaderStore from './HeaderStore';

const withHeaderStore = WrappedComponent => props => {
  class StoreProvider extends React.Component {
    static getStores() {
      return [HeaderStore];
    }

    static calculateState() {
      return {
        state: HeaderStore.getState(),
        onUpdateTitle: HeaderActions.updateTitle,
      };
    }

    render() {
      return <WrappedComponent {...this.props} headerStore={this.state} />;
    }
  }

  const ConnectedComponent = Container.create(StoreProvider);

  return <ConnectedComponent {...props} />;
};

export default withHeaderStore;
