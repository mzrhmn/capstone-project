import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { asyncReceiveNews } from '../../store/news/action';
import { saveNewAction } from '../../store/saved/action';

const Search = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const {
    news = [],
  } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveNews({ query }));
  }, [query, dispatch]);

  const onSave = ({ id, news }) => {
    dispatch(saveNewAction({ id, news, }))
  }

  if (!news.length > 0) {
    return <p className="text-center">Berita Tidak Ditemukan!</p>
  }

  return (
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
  )
}

export default Search