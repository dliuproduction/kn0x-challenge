import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/reducer';

export const configureStore = (initialState={}) => {
  return createStore(
    reducer,
    applyMiddleware(thunk)
  );
}