import dispatcher from './dispatcher';
import FormActionTypes from './FormActionTypes';

const Actions = {
  updateField(fieldName, value) {
    dispatcher.dispatch({
      type: FormActionTypes.UPDATE_FIELD,
      name: fieldName,
      value,
    });
  },
};

export default Actions;
