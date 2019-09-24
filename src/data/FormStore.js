import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import FormActionTypes from './FormActionTypes';
import Dispatcher from './Dispatcher';

const initialValues = {
  name: 'Kamil B.',
  date: null,
  text: 'Hello, world!',
};

class TodoStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.Map(initialValues);
  }

  reduce(state, action) {
    switch (action.type) {
      case FormActionTypes.UPDATE_FIELD:
        // Do nothing for now, we will add logic here soon!
        return state;

      default:
        return state;
    }
  }
}

export default new TodoStore();
