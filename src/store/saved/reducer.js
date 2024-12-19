import { ActionType } from './action';

const saveReducer = (save = [], action) => {
  switch (action.type) {
    case ActionType.SAVE_NEWS:
      return [...save, action.payload.news]
    case ActionType.UNSAVE_NEWS:
      return save.filter((news) => news._id !== action.payload.id)
    default:
      return save;
  }
}

export default saveReducer;
