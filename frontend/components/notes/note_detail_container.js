import { connect } from 'react-redux';
import NoteDetail from './note_detail';
// Actions
import { receiveNote, removeNote } from '../../actions/note_actions';

const mapStateToProps = state => {
	const notes = state.notes;
	console.log(notes);
	return {
		notes: state.notes,
		pinned: state.notes.pinned,
		currentUser: state.session.currentUser
	};
};

const mapDispatchToProps = (dispatch, { note }) => ({
	receiveNote: (note) => dispatch(receiveNote(note)),
	removeNote: () => dispatch(removeNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);
