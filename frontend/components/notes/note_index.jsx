import React from 'react';
import Masonry from 'react-masonry-component';
// import Masonry from 'react-masonry-css';
// Components
import NoteIndexItem from './note_index_item';
import NoteForm from './note_form';

class NoteIndex extends React.Component {

	render() {
		const { notes } = this.props;
		const noteItems = (
			<Masonry className='notesIndexIndividualWrapper'>
				{notes.map(note => 
					<ul className="todo-list">
						<NoteIndexItem
							key={`note-list-item${note.id}`}
							note={note}
							receiveNote={this.props.receiveNote}
							deleteNote={this.props.deleteNote}
						/>
					</ul>
				)}
			</Masonry>
		);

		return (
			<div className="notesIndexWrapper">
				<NoteForm receiveNote={this.props.receiveNote} />
				{noteItems}
			</div>
		);
	}
}

export default NoteIndex;
