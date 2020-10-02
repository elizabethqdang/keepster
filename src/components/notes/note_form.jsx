import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class NoteForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div id="note-form-box" clasName="note-form-box">
			<form className="note-form-container">
				<div className="note-form row title">
					<input type="text" placeholder="Title" className="note-form title" />
				</div>
				<div className="note-form row note">
					{/* <input type="textarea" placeholder="Take a note..." className="note-form note"/> */}
					<textarea placeholder="Take a note..." className="note-form note" />
				</div>
				<div className="note-form row footer">
					<div className="note-form toolbar">
						<input type="color" className="note-form button"/>
						<input type="file" className="note-form button"/>
						<input type="button" className="note-form button" alt="Delete" />
					</div>
					<input type="submit" value="keep" className="note-form submit" />
				</div>
			</form>
			</div>
		)
	}
}

export default withRouter(NoteForm);