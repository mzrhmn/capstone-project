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

export {
  ActionType,
  saveNewsActionCreator,
  unsaveNewsActionCreator,
};
