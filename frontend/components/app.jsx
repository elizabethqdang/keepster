import React from 'react';
// import LoginForm from './sessions/login_form_container';
import Navbar from './navbar/navbar_container';
// import NoteForm from './notes/note_form';
import NoteIndexContainer from './notes/note_index_container';

const App = () => (
	<div className="app">
		<h1></h1>
		
		<Navbar />
		<NoteIndexContainer />
	</div>
);

export default App;
