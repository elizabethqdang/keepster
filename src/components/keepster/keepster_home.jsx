import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NoteForm from '../notes/note_form_container';
import NoteIndex from '../notes/note_index';
import Navbar from '../navbars/navbar_container';

class KeepsterHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div className="">
				<Navbar />
				<NoteForm />
				<NoteIndex />
			</div>
		)
	}
}

export default withRouter(KeepsterHome);