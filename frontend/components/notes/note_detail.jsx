import React, { Fragment } from 'react';

// Components

class NoteDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			color: this.props.note.color,
			image: {}
		});
		this.colorPalette = this.colorPalette.bind(this);
		this.updateNote = this.updateNote.bind(this);
		this.update = this.update.bind(this);
	}

	update(property) {
		return e => this.setState({
			[property]: e.target.value
		});
	}
	
	updateNote() {
		const title = document.getElementById('updateTitle').innerHTML;
		const body = document.getElementById('updateBody').innerHTML;
		const editted = {
			title: title,
			body: body,
			updated_at: Date (new Date().getTime()),
			color: this.state.color
		}
		const newNote = Object.assign({}, this.props.note, editted);
		this.props.receiveNote(newNote);
	}

	colorPalette() {
		const colors = ["#ffffff", "#f28b82", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb", "#fdcfe8", "#e6c9a8", "#e8eaed"];

		colors.map(color, idx => {
			return (
				<div id={idx} className="" style={{backgroundColor:color, width:"18px", height:"18px", borderRadius:"50%"}}>
				</div>
			)
		} );
	}

	handleImageFile(image) {
		// e.preventDefault();
		// const file = e.currentTarget.files[0];
		const fileReader = new FileReader();

		if ((image.type === 'image/jpeg' || 'image/png' || 'gif' || 'jpg' || 'WEBP')) {
			fileReader.onloadend = () => {
				this.setState({
					imageFile: image,
					imageUrl: fileReader.result
				})
			}
		} else {
			this.setState({
				errors: ["Can’t upload this file. We accept GIF, JPEG, JPG, PNG, WEBP files less than 10MB and 25 megapixels."]
			});
		}
	
		console.log("image", image);
		console.log("fileReader", fileReader);
	}

	render() {
		const { note, removeNote, togglePinnedNote } = this.props;
		const { title, body, done, pinned, created_at, updated_at } = this.props.note;
		this.colorPalette;

		return (
		<Fragment>
			<div className="note-modal-header" style={{backgroundColor:this.state.color}}>
				<a id="updateTitle" className="note-modal-title" contentEditable="true">{title ? title : "Title"}</a>
				<button
					className={pinned ? "done" : "undone"}
					onClick={this.props.togglePinnedNote}>
				</button>
			</div>

			<div id="updateBody" className="note-modal-body" contentEditable="true" content>{body ? body : "Note"}</div>
			<div className="note-modal-timestamp">
				Edited {note.updated_at ? note.updated_at : note.created_at}
			</div>
			<div className="note-modal-footer">

				<div className='note-modal-toolbar'>
					<div className="color-palette noteIcon">
						<label htmlFor="colorIcon">
							<i class="fas fa-palette fa-md"></i>
						</label>
						<input id="colorIcon" type="color" value={note.color} onChange={this.update("color")} />
					</div>
					<div className="updateImage noteIcon">
						<label htmlFor="imgIcon">
							<i class="far fa-image fa-md"></i>
						</label>
						{/* <input id="imgIcon" type="image" accept="image/*" onChange={this.handleImageFile("image")} /> */}
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

				<div className='bottomClose' onClick={this.updateNote}>
					<button>CLOSE</button>
				</div>
				
			</div>
		</Fragment>
		);
	}
}

export default NoteDetail;
