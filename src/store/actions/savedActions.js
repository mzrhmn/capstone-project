export const saveArticle = (article) => {
  return { type: "SAVE_ARTICLE", payload: article };
};

export const unsaveArticle = (id) => {
  return { type: "UNSAVE_ARTICLE", payload: id };
};
