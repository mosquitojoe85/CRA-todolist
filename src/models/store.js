import { combineReducers, createStore } from 'redux';
import { lobbyBoard } from './reducers/board';
import regList from './reducers/register';

const reducer = combineReducers({
  lobbyBoard,
  regList
});
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 透過store.subscribe，偵聽store變化記錄log
// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;
