import { combineReducers } from 'redux';

// import errors from './errors_reducer';
// import notes from './notes_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
	// notes,
	session: sessionReducer
	// errors,
});

export default rootReducer;
