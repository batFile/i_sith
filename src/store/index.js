import { createStore } from 'redux';

const configureStore = (preloadedState = window.__INITIAL_STATE__ || {}) => {
	return createStore(
		createRootReducer(history),
		preloadedState
	);
};

const store = configureStore;

export { store };