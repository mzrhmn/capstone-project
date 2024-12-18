// const initialState = {
//   newsList: [],
//   loading: false,
//   error: null,
// };

// const newsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_NEWS_START":
//       return { ...state, loading: true };
//     case "FETCH_NEWS_SUCCESS":
//       return { ...state, newsList: action.payload, loading: false };
//     case "FETCH_NEWS_FAILURE":
//       return { ...state, error: action.payload, loading: false };
//     default:
//       return state;
//   }
// };

// export default newsReducer;
const initialState = {
  newsList: [], // Nilai default array kosong
  loading: false,
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEWS_START":
      return { ...state, loading: true };
    case "FETCH_NEWS_SUCCESS":
      return { ...state, newsList: action.payload, loading: false };
    case "FETCH_NEWS_FAILURE":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default newsReducer;
