import { GET_REG_LIST, CANCEL_REG } from '../actionType';

const defaultValue = {
  regList: {
    patient: {},
    list: []
  }
};

export default function regList(state = defaultValue.regList, action) {
  switch (action.type) {
    case GET_REG_LIST: {
      return action.data;
    }
    case CANCEL_REG: {
      const { list } = state;
      const index = list.findIndex(item => item.id === action.id);
      list.splice(index, 1);
      return { ...state, list };
    }
    default:
      return state;
  }
}
