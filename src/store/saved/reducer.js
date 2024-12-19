import { ActionType } from './action';

const saveReducer = (save = [], action) => {
  switch (action.type) {
    case ActionType.SAVE_NEWS:
      return [...save, action.payload.news]
    case ActionType.UNSAVE_NEWS:
      return save.filter((news) => news._id !== action.payload.id)
    case ActionType.RECEIVE_SAVE_NEWS:
      return action.payload.news;
    default:
      return save;
  }
}

export default saveReducer;
