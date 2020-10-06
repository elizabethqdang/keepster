import {RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';
import merge from 'lodash/merge';

const notesReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState = Object.assign({}, state);

	switch (action.type) {
		case RECEIVE_NOTE:
			return Object.assign(newState, {[action.note.id]: action.note});
		case REMOVE_NOTE:
			delete newState[action.noteId.id];
			return newState;
		default:
				return state;
	}
};

export default notesReducer;