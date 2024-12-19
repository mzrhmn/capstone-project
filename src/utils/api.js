const api = (() => {
  const {
    REACT_APP_PROTOCOL,
    REACT_APP_HOST,
    REACT_APP_PORT,
    REACT_APP_API_KEY
  } = process.env;
  const BASE_URL = `${REACT_APP_PROTOCOL}://${REACT_APP_HOST}:${REACT_APP_PORT}`;

  function saveLocalNews(news) {
    const localNews = getLocalNews();
    localNews.push(news)
    localStorage.setItem('news', JSON.stringify(localNews));
  }

  function getLocalNews() {
    return JSON.parse(localStorage.getItem('news')) || [];
  }

  function deleteLocalNews(id) {
    const localNews = getLocalNews();
    const newLocalNews = localNews.filter((news) => news._id !== id);
    localStorage.setItem('news', JSON.stringify(newLocalNews));
  }

  async function getNews({ query }) {
    const response = await fetch(`${BASE_URL}/svc/search/v2/articlesearch.json?q=${query}&sort=newest&api-key=${REACT_APP_API_KEY}`);
    const responseJson = await response.json();
    const { response: data } = responseJson;
    return data;
  }

  return {
    saveLocalNews,
    getLocalNews,
    deleteLocalNews,
    getNews,
  }
})();

export default api;
