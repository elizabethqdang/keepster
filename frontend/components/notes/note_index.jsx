import React from 'react';
// import Masonry from 'react-masonry-component';
import Masonry from 'react-masonry-css';
// Components
import NoteIndexItem from './note_index_item';
import NoteForm from './note_form';

class NoteIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { notes } = this.props;
		const breakpointColumnsObj = {
			default: 4,
			1100: 3,
			700: 2,
			500: 1
		};
		const randomHeight = Math.random() * (550 - 100) + 100;
		console.log(randomHeight);
		const noteItems = (
			<Masonry className="notesIndexIndividualWrapper masonry-grid"
				breakpointCols={breakpointColumnsObj}
				columnClassName="masonry-grid-column"
				>
				{notes.map(note => 
					<ul className="todo-list">
						<NoteIndexItem
							key={`note-list-item${note.id}`}
							note={note}
							receiveNote={this.props.receiveNote}
							removeNote={this.props.removeNote}
							// style={{height:}}
						/>
					</ul>
				)}
			</Masonry>
		);
		// console.log(noteItems);

		return (
			<div className="notesIndexWrapper">
				<NoteForm receiveNote={this.props.receiveNote} />
				{noteItems}
			</div>
		);
	}
}

export default NoteIndex;
