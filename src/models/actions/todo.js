import { ADD_TODO, CHANGE_STATUS } from '../actionType';

// action creator
export function addTodo(data) {
  return {
    type: ADD_TODO,
    data
  };
}

export function changeStatus(id) {
  return {
    type: CHANGE_STATUS,
    id
  };
}
