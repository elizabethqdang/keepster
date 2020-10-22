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
		this.toggleDetail = this.toggleDetail.bind(this);
		this.toggleNoteDetailModal = this.toggleNoteDetailModal.bind(this);
		this.togglePinnedNote = this.togglePinnedNote.bind(this);
		this.toggleNote = this.toggleNote.bind(this);
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

		const toggledNote = Object.assign(
			{},
			this.props.note,
			{ done: !this.props.note.done }
		);

		this.props.receiveNote(toggledNote);

		this.setState({
			pinned: !this.state.pinned
		});
	}

	render() {
		const { note, updateNote } = this.props;
		const { title, done, body } = note;
		let detail;
		if (this.state.showNoteDetailModal) {
			return (
				<div className="modal-background" onClick={this.toggleNoteDetailModal}>
					<div className="modal-child" onClick={e => e.stopPropagation()}>
						<NoteDetailContainer note={note} />;
					</div>
				</div>
			)
		} else {
	

		return (
			<li className="todo-list-item" onClick={this.toggleNoteDetailModal} style={{position:"relative", transform:"translate"}}>

				<div className="todo-header">
					<a className="truncate" hidden={title == "" ? true : false}>{title}</a>
					<p className="todo-body" hidden={title == "" ? false : true}>{body}</p>
					<button
						className={done ? "done" : "undone"}
						onClick={this.togglePinnedNote}>
					</button>
				</div>

				<p className="todo-body" hidden={title == "" ? true : false}>{note.body}</p>

				<div className='note-item-toolbar'>
					<div className="color-palette noteIcon">
						<label for="colorIcon">
							<i class="fas fa-palette fa-md"></i>
						</label>
					</div>
					<div className="image-upload noteIcon">
						<label for="imgIcon">
							<i class="far fa-image fa-md"></i>
						</label>
						<input id="imgIcon" type="file" />
					</div>
					<div className="archive-btn noteIcon">
						<label for="archiveIcon">
							<i class="fas fa-archive fa-md"></i>
						</label>
						<button id="archiveIcon" />
					</div>
					<div
						className="delete-btn noteIcon"
						onClick={this.props.removeNote}>
						<label for="deleteIcon">
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
