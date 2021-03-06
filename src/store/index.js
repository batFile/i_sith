import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';
import { ALLOW_WINDOW_EXTENDS, ALLOW_REDUX_DEVTOOLS_EXTENSION } from '../constants/env';
import { history } from '../routes/history';
import { createRootReducer } from './root-reducers';
import { rootSaga } from './root-sagas';

const sagaMiddleware = createSagaMiddleware();
const reduxMiddleware = applyMiddleware(
	sagaMiddleware,
	routerMiddleware(history),
);

const enhancers = ALLOW_REDUX_DEVTOOLS_EXTENSION ? composeWithDevTools(reduxMiddleware) : reduxMiddleware;

const store = createStore(
	createRootReducer(history),
	enhancers
);

sagaMiddleware.run(rootSaga);

export { store };

if (ALLOW_WINDOW_EXTENDS) {
	window.$store = store;
}