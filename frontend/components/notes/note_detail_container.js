import { connect } from 'react-redux';
import NoteDetail from './note_detail';
// Actions
import { removeNote } from '../../actions/note_actions';

const mapDispatchToProps = (dispatch, { note }) => ({
	removeNote: () => dispatch(removeNote(note))
});

export default connect(
	null, // note props is already passed in
	mapDispatchToProps
)(NoteDetail);
