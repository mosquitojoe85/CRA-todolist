import { combineReducers, createStore } from 'redux';
import regList from './reducers/register';

const reducer = combineReducers({
  regList
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
