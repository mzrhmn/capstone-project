// components

// redux
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { unsaveNewAction } from "../../store/saved/action";

export default function SavedNews() {
  const { save } = useSelector((states) => states);
  const dispatch = useDispatch();

  const onDelete = ({ id }) => {
    dispatch(unsaveNewAction({ id }));
  };

  if (!save.length > 0) {
    return <p className="text-center">Berita Kosong!</p>;
  }

  return (
    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <h4 className="text-center mb-4">Berita Anda</h4>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {save?.map((value, key) => (
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
                  <p class="card-text">{value?.abstract}</p>
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
                        onClick={() => onDelete({ id: value._id })}
                      >
                        Delete
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
  );

  // return React.createElement(
  //   { title: "Saved News" },
  //   React.createElement(
  //     "h1",
  //     {
  //       className:
  //         "text-2xl font-bold border-primary border-b-2 mx-10 my-10 text-primary text-center",
  //     },
  //     "Saved"
  //   ),
  //   save.length > 0
  //     ? React.createElement(
  //       "div",
  //       { className: "overflow-auto" },
  //       React.createElement(
  //         "table",
  //         { className: "w-auto mx-10 mt-4" },
  //         React.createElement(
  //           "thead",
  //           { className: "text-left font-bold text-xl tracking-wide" },
  //           React.createElement(
  //             "tr",
  //             null,
  //             React.createElement(
  //               "th",
  //               { className: "p-3 w-[14rem]" },
  //               "Source"
  //             ),
  //             React.createElement(
  //               "th",
  //               { className: "p-3 w-[14rem]" },
  //               "Title"
  //             ),
  //             React.createElement("th", { className: "p-3" }, "Description"),
  //             React.createElement("td", { className: "p-3" }, "Action")
  //           )
  //         ),
  //         React.createElement(
  //           "tbody",
  //           null,
  //           save.map((news, index) =>
  //             React.createElement(
  //               "tr",
  //               { key: index, className: "odd:bg-base-300" },
  //               React.createElement(
  //                 "td",
  //                 { className: "p-3 w-[14rem]" },
  //                 React.createElement(
  //                   "div",
  //                   null,
  //                   `${news.source?.name} - ${news?.author}`
  //                 ),
  //                 React.createElement(
  //                   "a",
  //                   { className: "font-bold underline", href: news?.url },
  //                   "Go to News Page →"
  //                 )
  //               ),
  //               React.createElement(
  //                 "td",
  //                 { className: "p-3 w-[14rem]" },
  //                 news?.title
  //               ),
  //               React.createElement(
  //                 "td",
  //                 { className: "p-3" },
  //                 news?.description
  //               ),
  //               React.createElement(
  //                 "td",
  //                 { className: "p-3" },
  //                 React.createElement(
  //                   "button",
  //                   {
  //                     className: "font-bold underline",
  //                     onClick: () => {
  //                       onDelete({ id: news._id });
  //                       // eslint-disable-next-line no-restricted-globals
  //                       return confirm("Yakin ingin menghapus berita ini?");
  //                     },
  //                   },
  //                   "Delete"
  //                 )
  //               )
  //             )
  //           )
  //         )
  //       )
  //     )
  //     : React.createElement(
  //       "h3",
  //       { className: "mt-4 text-2xl text-primary text-center" },
  //       "No saved news"
  //     )
  // );
}
