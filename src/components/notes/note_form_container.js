import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './note_form';
import { createNote, deleteNote } from '../../actions/note_actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser || {},
	errors: state.errors.notes || [],
	notes: state.notes || {}
});

const mapDispatchToProps = (dispatch) => ({
	createNote: (note) => dispatch(createNote(note)),
	deleteNote: (noteId) => dispatch(deleteNote(noteId))
});

export function mapDispatchToStore(dispatch) {
	return bindActionCreators({ createNote }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToStore)(NoteForm);