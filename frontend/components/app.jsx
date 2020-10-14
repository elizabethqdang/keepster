import React from 'react';
import TodoListContainer from './todo_list/todo_list_container';
import NavbarContainer from './navbars/navbar_container';

const App = () => (
  <div className="app">
    <h1></h1>
		<NavbarContainer />
    <TodoListContainer />
  </div>
);

export default App;
