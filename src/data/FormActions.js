import FormActionTypes from './FormActionTypes';
import Dispatcher from './Dispatcher';

const Actions = {
  updateField(fieldName, value) {
    Dispatcher.dispatch({
      type: FormActionTypes.UPDATE_FIELD,
      name: fieldName,
      value,
    });
  },
};

export default Actions;
