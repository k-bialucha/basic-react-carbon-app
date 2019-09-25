import Immutable from 'immutable';

import { ReduceStore } from 'flux/utils';

import dispatcher from './dispatcher';
import HeaderActionTypes from './HeaderActionTypes';

const initialValues = {
  title: 'App Header',
};

class TodoStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return Immutable.Map(initialValues);
  }

  reduce(state, action) {
    switch (action.type) {
      case HeaderActionTypes.UPDATE_TITLE: {
        const { title } = action;
        return state.set('title', title);
      }

      default:
        return state;
    }
  }
}

export default new TodoStore();
