import React, { useState, useEffect } from "react";
import "./Programming.css";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveNews } from "../../store/news/action";
import { saveNewAction, unsaveNewAction } from "../../store/saved/action";

const Programming = () => {
  const dispatch = useDispatch();
  const { news = [] } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveNews({ query: "programming" }));
  }, [dispatch]);

  // const onSave = ({ id, news }) => {
  //   dispatch(saveNewAction({ id, news }));
  // };

  return (
    <main>
      <section class="py-1 text-left container">
        <div class="row py-lg-1">
          <div class="col-lg-6 col-md-1">
            <h3>Berita Programming</h3>
            <p>Cek berita ter-update seputar Programming!</p>
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
                    height="200"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    src={`https://www.nytimes.com/${value?.multimedia[0]?.url}`}
                  />
                  <title>{value?.headline.main}</title>
                  <div class="card-body">
                    <p>{value?.source}</p>
                    <h5 class="card-text">{value?.abstract}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          href={value?.web_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View
                        </a>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          onClick={() => {
                            if (value.isSaved) {
                              dispatch(unsaveNewAction({ id: value._id }));
                            } else {
                              dispatch(
                                saveNewAction({ id: value._id, news: value })
                              );
                            }
                          }}
                        >
                          {value.isSaved ? "Unsave" : "Save"}
                        </button>
                        {/* <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          disabled={value.isSaved}
                          onClick={() => onSave({ id: value._id, news: value })}
                        >
                          {value.isSaved ? "Saved" : "Save"}
                        </button> */}
                      </div>
                      <small class="text-body-secondary">
                        {value?.pub_date}
                      </small>
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

export default Programming;
