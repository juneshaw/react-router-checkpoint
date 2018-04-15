import { applyMiddleware, createStore } from 'redux';
import rootReducer from  './reducers';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const initialState = {};

export default(initialState) => {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(logger, thunkMiddleware)
    );
}
