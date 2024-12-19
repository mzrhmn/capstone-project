import { updateIssLikedNewsActionCreator } from "../news/action";

const ActionType = {
  SAVE_NEWS: 'SAVE_NEWS',
  UNSAVE_NEWS: 'UNSAVE_NEWS',
};

function saveNewsActionCreator(news) {
  return {
    type: ActionType.SAVE_NEWS,
    payload: {
      news,
    }
  };
}

function unsaveNewsActionCreator(id) {
  return {
    type: ActionType.UNSAVE_NEWS,
    payload: {
      id,
    }
  };
}

function saveNewAction({ news, id }) {
  return async (dispatch) => {
    try {
      dispatch(saveNewsActionCreator(news))
      dispatch(updateIssLikedNewsActionCreator(id))
    } catch (error) {
      console.log(error);
    }
  }
}

function unsaveNewAction({ id }) {
  return async (dispatch) => {
    try {
      dispatch(unsaveNewsActionCreator(id))
      dispatch(updateIssLikedNewsActionCreator(id))
    } catch (error) {
      console.log(error);
    }
  }
}

export {
  ActionType,
  saveNewsActionCreator,
  unsaveNewsActionCreator,
  saveNewAction,
  unsaveNewAction,
};
