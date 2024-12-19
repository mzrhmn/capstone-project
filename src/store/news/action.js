import api from "../../utils/api";

const ActionType = {
  RECEIVE_NEWS: 'RECEIVE_NEWS',
  UPDATE_IS_LIKED_NEWS: 'UPDATE_IS_LIKED_NEWS',
};

function receiveNewsActionCreator(news) {
  return {
    type: ActionType.RECEIVE_NEWS,
    payload: {
      news,
    }
  };
}

function updateIssLikedNewsActionCreator(id) {
  return {
    type: ActionType.UPDATE_IS_LIKED_NEWS,
    payload: {
      id,
    }
  };
}

function asyncReceiveNews({ query }) {
  return async (dispatch) => {
    try {
      const { docs: news } = await api.getNews({ query });
      dispatch(receiveNewsActionCreator(news));
    } catch (error) {
      console.log('ERROR', error);
    }
  }
}

export {
  ActionType,
  receiveNewsActionCreator,
  asyncReceiveNews,
  updateIssLikedNewsActionCreator
};
