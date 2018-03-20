import { GET_REG_LIST, CANCEL_REG } from '../actionType';

// action creator
export function saveRegList(data) {
  return {
    type: GET_REG_LIST,
    data
  };
}

export function cancelReg(id) {
  return {
    type: CANCEL_REG,
    id
  };
}
