import { ADD_TODO, CHANGE_STATUS } from '../actionType';

const defaultValue = {
  todoList: [
    { id: 1, done: true, desc: '從前有一個倉庫你知道，有一天你知道，放了一隻貓，老鼠都不敢動。到年底的時候喔，倉庫就多了很多糧食。' },
    { id: 2, done: false, desc: '把Webpack筆記整理後放上Github。' }
  ]
};

export default function todoList(state = defaultValue.todoList, action) {
  switch (action.type) {
    case ADD_TODO: {
      return state.concat([
        { desc: action.data, done: false, id: Math.floor(Math.random() * 1000) }
      ]);
    }
    case CHANGE_STATUS: {
      const newState = Array.from(state);
      const index = state.findIndex(item => item.id === action.id);
      newState[index].done = !state[index].done;
      return newState;
    }
    default:
      return state;
  }
}
