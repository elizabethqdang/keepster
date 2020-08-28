import { combineReducers } from 'redux';

import notesReducer from './notes_reducer';
import sessionReducer from './session_reducer';
// import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  notes: notesReducer,
	session: sessionReducer,
	// errors: errorsReducer
});

export default rootReducer;
