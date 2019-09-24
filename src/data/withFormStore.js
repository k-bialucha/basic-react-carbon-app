import React from 'react';

import { Container } from 'flux/utils';
import FormStore from './FormStore';

export const withFormStore = WrappedComponent => props => {
  class StoreProvider extends React.Component {
    static getStores() {
      return [FormStore];
    }

    static calculateState() {
      return {
        form: FormStore.getState(),
      };
    }

    render() {
      return <WrappedComponent {...this.props} store={this.state} />;
    }
  }

  const ConnectedComponent = Container.create(StoreProvider);

  return <ConnectedComponent {...props} />;
};

export default withFormStore;
