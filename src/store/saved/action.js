import api from "../../utils/api";
import { updateIssLikedNewsActionCreator } from "../news/action";

const ActionType = {
  SAVE_NEWS: 'SAVE_NEWS',
  UNSAVE_NEWS: 'UNSAVE_NEWS',
  RECEIVE_SAVE_NEWS: 'RECEIVE_SAVE_NEWS',
};

function receiveSaveNewsActionCreator(news) {
  return {
    type: ActionType.RECEIVE_SAVE_NEWS,
    payload: {
      news,
    }
  };
}

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
      api.saveLocalNews(news);
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
      api.deleteLocalNews(id);
      dispatch(unsaveNewsActionCreator(id))
      dispatch(updateIssLikedNewsActionCreator(id))
    } catch (error) {
      console.log(error);
    }
  }
}

function preloadSavedAction() {
  return async (dispatch) => {
    try {
      const news = api.getLocalNews();;
      dispatch(receiveSaveNewsActionCreator(news));
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
  receiveSaveNewsActionCreator,
  preloadSavedAction,
};
