import React from 'react';
import { connect } from 'react-router-dom';
import NoteForm from './note_form';
import { createNote, deleteNote } from '../../actions/note_actions';

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser || {},
	errors: state.errors.notes || [],
	notes: state.notes || {}
});

const mapDispatchToProps = (dispatch) => ({
	createNote: (note, userId) => dispatch(createNote(note, userId)),
	deleteNote: (noteId) => dispatch(deleteNote(noteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);