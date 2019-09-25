import dispatcher from './dispatcher';
import HeaderActionTypes from './HeaderActionTypes';

const Actions = {
  updateTitle(title) {
    dispatcher.dispatch({
      type: HeaderActionTypes.UPDATE_TITLE,
      title,
    });
  },
};

export default Actions;
