import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
	createStore(
		rootReducer,
		preloadedState,
		// applyMiddleware(thunk, logger)
		applyMiddleware(ReduxThunk)

	)
);

export default configureStore;