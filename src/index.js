import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';
// import * as serviceWorker from './serviceWorker';
//Components
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
	let store;
	if (window.currentUser) {
		const preloadedState = { session: { currentUser: window.currentUser } };
		store = configureStore(preloadedState);
		delete window.currentUser;
	} else {
		store = configureStore();
	}
	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store} />, root);
});

// index.js
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
