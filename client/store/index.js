import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import user from './user';
import blogPost from './blogPost';
import recipe from './recipe';

const reducer = combineReducers({user, recipe});

const store = createStore(
    reducer, applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
export * from './user';
export * from './blogPost';
export * from './recipe';