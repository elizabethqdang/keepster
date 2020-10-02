import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NoteForm from '../notes/note_form';
import NoteIndex from '../notes/note_index';

class KeepsterHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div clasName="">
				<NoteForm />
				<NoteIndex />
			</div>
		)
	}
}

export default withRouter(KeepsterHome);