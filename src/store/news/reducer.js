import { ActionType } from './action';

function newsReducer(news = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_NEWS:
      return action.payload.news.map((value) => ({
        ...value,
        isSaved: false,
      }));
    case ActionType.UPDATE_IS_LIKED_NEWS:
      return news.map(item => item._id === action.payload.id ?
        {
          ...item,
          isSaved: item.isSaved === false ? true : false
        } : item
      )
    default:
      return news;
  }
}

export default newsReducer;
