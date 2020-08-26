import { connect } from 'react-redux';
import NoteIndex from './note_index';

// Actions
import { receiveNotes, receiveNote, removeNote} from '../../actions/note_actions';
import { allNotes } from '../../actions/note_actions';

const mapStateToProps = state => {
	const allNotes = Object.values(state.notes);
	// const notes = allNotes.map((note, ) => Object.entries(note)
	// );
	console.log(allNotes);
	return {
		notes: allNotes,
		pinned: state.notes.pinned,
		currentUser: state.session.currentUser
	}
};

const mapDispatchToProps = dispatch => ({
	receiveNote: note => dispatch(receiveNote(note)),
	removeNote: () => dispatch(removeNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
