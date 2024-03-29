import Immutable from 'immutable';

import { ReduceStore } from 'flux/utils';

import dispatcher from './dispatcher';
import FormActionTypes from './FormActionTypes';

const today = new Date();
const todayFormatted = today.toISOString().slice(0, 10);

const initialValues = {
  name: 'Kamil B.',
  date: todayFormatted,
  text: 'Hello, world!',
  color: null,
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
      case FormActionTypes.UPDATE_FIELD: {
        const { name, value } = action;
        return state.set(name, value);
      }

      default:
        return state;
    }
  }
}

export default new TodoStore();
