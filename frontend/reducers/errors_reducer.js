import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS } from '../actions/session_actions';
import { RECEIVE_NOTE, NOTE_ERROR } from '../actions/note_actions';

const errorsReducer = (state = {}, action) => {
	Object.freeze(state);

	switch (action.type) {
		case RECEIVE_SESSION_ERRORS:
			return { session: action.errors };
		case RECEIVE_CURRENT_USER:
			return [];
		case CLEAR_SESSION_ERRORS:
			return {};
		case NOTE_ERROR:
			return { notes: action.errors };
		case RECEIVE_NOTE:
			return [];
		default:
			return state;
	}
}

export default errorsReducer;