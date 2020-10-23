import React from 'react';

// Components

class NoteDetail extends React.Component {
	render() {
		const { note, removeNote } = this.props;
		const { title, body, done } = this.props.note;
		return (
		<div className="note-modal">
			<div className="note-modal-header">
				<a className="">{title ? title : "Title"}</a>
				<button
					className={done ? "done" : "undone"}
					onClick={this.togglePinnedNote}>
				</button>
			</div>

			<p className="note-modal-body">{body ? body : "Note"}</p>

			<div className="note-modal-footer">

				<div className='note-modal-toolbar'>
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

				<div className='bottomClose'>
					<button>CLOSE</button>
				</div>
				
			</div>
		</div>
		);
	}
}

export default NoteDetail;
