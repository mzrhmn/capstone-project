import React, { useEffect } from "react";
import "./NewsGlobal.css";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveNews } from "../../store/news/action";
import { saveNewAction } from "../../store/saved/action";

const NewsGlobal = () => {
  const dispatch = useDispatch();
  const {
    news = [],
  } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveNews({ query: 'Indonesia' }));
  }, [dispatch]);

  const onSave = ({ id, news }) => {
    dispatch(saveNewAction({ id, news, }))
  }

  return (
    <main>
      <section class="py-2 text-center container">
        <div class="row py-lg-2">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h3 class="fw-dark">Berita Indonesia</h3>
            <p class="lead text-body-secondary">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
          </div>
        </div>
      </section>

      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {news?.map((value, key) => (
              <div key={key} class="col">
                <div class="card shadow-sm">
                  <img
                    class="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    src={`https://www.nytimes.com/${value?.multimedia[0]?.url}`}
                  />
                  <title>{value?.headline.main}</title>
                  <div class="card-body">
                    <p class="card-text">
                      {value?.abstract}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          href={value?.web_url}
                          target="_blank" rel="noreferrer"
                        >
                          View
                        </a>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          disabled={value.isSaved}
                          onClick={() => onSave({ id: value._id, news: value })}
                        >
                          {value.isSaved ? 'Saved' : 'Save'}
                        </button>
                      </div>
                      <small class="text-body-secondary">{value?.pub_date}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsGlobal;
