const initialState = {
  savedArticles: [],
};

const savedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_ARTICLE":
      return {
        ...state,
        savedArticles: [...state.savedArticles, action.payload],
      };
    case "UNSAVE_ARTICLE":
      return {
        ...state,
        savedArticles: state.savedArticles.filter(
          (article) => article.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default savedReducer;
