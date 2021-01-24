import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const middlewares = [];

middlewares.push(thunk);
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
export default store;