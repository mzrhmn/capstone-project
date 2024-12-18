export const fetchNews = (query) => async (dispatch) => {
  dispatch({ type: "FETCH_NEWS_START" });
  try {
    const res = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=J0HuPanh8nq4xA8IrvYJtsPyyDcrgeX6`
    );
    const data = await res.json();
    dispatch({ type: "FETCH_NEWS_SUCCESS", payload: data.response.docs });
  } catch (error) {
    dispatch({ type: "FETCH_NEWS_FAILURE", payload: error.message });
  }
};
