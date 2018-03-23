import { combineReducers, createStore } from 'redux';
import todoList from './reducers/todo';

const reducer = combineReducers({
  todoList
});
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 偵聽store
// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;
