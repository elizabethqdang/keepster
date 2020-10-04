import NoteAPIUtil from '../../src/util/note_api_util';

export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const RECEIVE_NOTE_ERRORS = 'REECEIVE_NOTE_ERRORS';

export const receiveNote = note => ({
	type = RECEIVE_NOTE,
	note
});

export const receiveNotes = notes => ({
	type = RECEIVE_NOTES,
	notes
});

export const removeNote = note => ({
	type = REMOVE_NOTE,
	note
});

export const receiveNoteErrors = errors => ({
	type = RECEIVE_NOTE_ERRORS,
	errors
});

export const createNote = (note, userId) => dispatch => (
	NoteAPIUtil.createNote(note, userId).then(
		note => (dispatch(receiveNote(note))),
		errors => (dispatch(receiveNoteErrors(errors.responseJSON)))
));

export const deleteNote = (noteId) => dispatch => (
	NoteAPIUtil.deleteNote(noteId).then(
		noteId => (dispatch(removeNote(noteId))),
		errors => (dispatch(receiveNoteErrors(errors.responseJSON)))
));