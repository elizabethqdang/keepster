import React from 'react';
import NoteDetailContainer from './note_detail_container';

class NoteDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			detail: false,
			pinned: false,
			showNoteDetailModal: false
		};
		this.update = this.update.bind(this);
		this.toggleDetail = this.toggleDetail.bind(this);
		this.toggleNoteDetailModal = this.toggleNoteDetailModal.bind(this);
		this.togglePinnedNote = this.togglePinnedNote.bind(this);
		this.toggleNote = this.toggleNote.bind(this);
	}

	update(property) {
		return e => this.setState({ [property]: e.target.value });
	}

	toggleDetail(e) {
		e.preventDefault();
		this.setState({
			detail: !this.state.detail,
			form: false
		});
	}

	toggleNoteDetailModal(e) {
		e.preventDefault();
		this.setState({
			showNoteDetailModal: !this.state.showNoteDetailModal,
		});
	}

	closeModal(e) {
		e.preventDefault();
		this.setState({
			showNoteDetailModal: false
		});
	}

	toggleNote(e) {
		e.preventDefault();
		const toggledNote = Object.assign(
			{},
			this.props.note,
			{ done: !this.props.note.done }
		);

		this.props.receiveNote(toggledNote);
	}

	togglePinnedNote(e) {
		e.preventDefault();
		e.stopPropagation();

		const toggledNote = Object.assign(
			{},
			this.props.note,
			{ done: !this.props.note.done },
			{ updated_at: new Date().getTime() },
			{ pinned: !this.props.note.pinned }
		);
		this.props.receiveNote(toggledNote);
		console.log(toggledNote);
	}

	render() {
		const { note, updateNote } = this.props;
		const { title, done, body, pinned, color } = this.props.note;
		let detail;
		if (this.state.showNoteDetailModal) {
			return (
				<div className="modal-background" onClick={this.toggleNoteDetailModal}>
					<div className="modal-child" onClick={e => e.stopPropagation()}>
						<NoteDetailContainer 
							note={note}
							togglePinnedNote={this.togglePinnedNote}
							style={{backgroundColor:note.color}} />;
					</div>
				</div>
			)
		} else {
	

		return (
			<li className="todo-list-item" style={{position:"relative", transform:"translate", backgroundColor:note.color}}>
				<div>{note.images ? note.images : null}</div>
				<div className="todo-header" onClick={this.toggleNoteDetailModal} >
					<a className="truncate" hidden={title == "" ? true : false}>{title}</a>
					<p className="todo-body" hidden={title == "" ? false : true}>{body}</p>
					<button
						className={pinned ? "done" : "undone"}
						onClick={this.togglePinnedNote}>
					</button>
				</div>

				<p className="todo-body" hidden={title == "" ? true : false} onClick={this.toggleNoteDetailModal} >{note.body}</p>

				<div className='note-item-toolbar'>
					<div className="color-palette noteIcon">
						<label htmlFor="colorIcon">
							<i class="fas fa-palette fa-md"></i>
						</label>
						<input id="colorIcon" type="color" value={note.color} onChange={this.update("color")} />
					</div>
					<div className="index-item-toolbar-img noteIcon">
						<label htmlFor="indexImgIcon">
							<i class="far fa-image fa-md"></i>
						</label>
						<input id="indexImgIcon" type="file" />
					</div>
					<div className="archive-btn noteIcon">
						<label htmlFor="archiveIcon">
							<i class="fas fa-archive fa-md"></i>
						</label>
						<button id="archiveIcon" />
					</div>
					<div
						className="delete-btn noteIcon"
						onClick={this.props.removeNote}>
						<label htmlFor="deleteIcon">
							<i class="far fa-trash-alt fa-md"></i>
						</label>
						<button id="deleteIcon" />
					</div>
				</div>

			</li>
		);
		}
	}
}

export default NoteDetail;
