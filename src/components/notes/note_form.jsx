import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './note.css';

class NoteForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			note: ''
		};
		this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
		this.handleNoteUpdate = this.handleNoteUpdate.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(input) {
		return e => {
			this.setState({[input]: e.currentTarget.value})
		}
	}

	handleTitleUpdate(e) {
		this.setState({title: e.currentTarget.value})
	}

	handleNoteUpdate(e) {
		this.setState({ note: e.currentTarget.value })
	}

	handleSubmit(e) {
		e.preventDefault();
		var note = {
			title: this.state.title,
			note: this.state.note
		}
		this.props.createNote(note);

		// const note = new FormData();
		// note.append("note[userId]", this.props.currentUser.id);
		// note.append("note[title]", this.state.title);
		// note.append("note[note]", this.state.note);
		// this.props.createNote(note, this.props.currentUser.id);
		
		this.setState({
			title: '',
			note: ''
		});
		console.log("note", note);
	}

	render() {
		return (
			<div id="note-form-box" className="note-form-box">
			<form 
				className="note-form-container" 
				onSubmit={this.handleSubmit}>
				<div className="note-form row title">
					<input 
						type="text" 
						placeholder="Title" 
						className="note-form title"
						onChange={this.update("title")} 
						value={this.state.title}
					/>
				</div>
				<div className="note-form row note">
					<input 
						type="textarea" 
						aria-multiline="true" 
						role="textbox" 
						placeholder="Take a note..." 
						className="note-form note"
						value={this.state.note}
						// onChange={this.update("note")} 
						onChange={this.handleNoteUpdate} 
					/>
					{/* <textarea placeholder="Take a note..." className="note-form note"></textarea> */}
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