import { connect } from 'react-redux';
import NoteIndex from './note_index';

// Actions
import { receiveNotes, receiveNote, removeNote} from '../../actions/note_actions';
import { allNotes } from '../../actions/note_actions';

const mapStateToProps = state => ({
	notes: allNotes(state),
	state
});

const mapDispatchToProps = dispatch => ({
	receiveNote: note => dispatch(receiveNote(note)),
	removeNote: () => dispatch(removeNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
