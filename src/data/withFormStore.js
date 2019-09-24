import React from 'react';

import { Container } from 'flux/utils';

import FormActions from './FormActions';
import FormStore from './FormStore';

const withFormStore = WrappedComponent => props => {
  class StoreProvider extends React.Component {
    static getStores() {
      return [FormStore];
    }

    static calculateState() {
      return {
        state: FormStore.getState(),
        onUpdateField: FormActions.updateField,
      };
    }

    render() {
      return <WrappedComponent {...this.props} formStore={this.state} />;
    }
  }

  const ConnectedComponent = Container.create(StoreProvider);

  return <ConnectedComponent {...props} />;
};

export default withFormStore;
