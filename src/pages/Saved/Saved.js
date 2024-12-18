// // components
// import Layout from "../components/Layout";

// // redux
// import { useDispatch, useSelector } from "react-redux";
// import { deleteThisNews } from "../features/news-slice";
// import React from "react";

// export default function SavedNews() {
//   const savedNews = useSelector((state) => state.news.data.saved);
//   const dispatch = useDispatch();

//   function deleteSaved(title) {
//     dispatch(deleteThisNews(title));
//   }

//   return React.createElement(
//     Layout,
//     { title: "Saved News" },
//     React.createElement(
//       "h1",
//       {
//         className:
//           "text-2xl font-bold border-primary border-b-2 mx-10 my-10 text-primary text-center",
//       },
//       "Saved"
//     ),
//     savedNews.length > 0
//       ? React.createElement(
//           "div",
//           { className: "overflow-auto" },
//           React.createElement(
//             "table",
//             { className: "w-auto mx-10 mt-4" },
//             React.createElement(
//               "thead",
//               { className: "text-left font-bold text-xl tracking-wide" },
//               React.createElement(
//                 "tr",
//                 null,
//                 React.createElement(
//                   "th",
//                   { className: "p-3 w-[14rem]" },
//                   "Source"
//                 ),
//                 React.createElement(
//                   "th",
//                   { className: "p-3 w-[14rem]" },
//                   "Title"
//                 ),
//                 React.createElement("th", { className: "p-3" }, "Description"),
//                 React.createElement("td", { className: "p-3" }, "Action")
//               )
//             ),
//             React.createElement(
//               "tbody",
//               null,
//               savedNews.map((news, index) =>
//                 React.createElement(
//                   "tr",
//                   { key: index, className: "odd:bg-base-300" },
//                   React.createElement(
//                     "td",
//                     { className: "p-3 w-[14rem]" },
//                     React.createElement(
//                       "div",
//                       null,
//                       `${news.source?.name} - ${news?.author}`
//                     ),
//                     React.createElement(
//                       "a",
//                       { className: "font-bold underline", href: news?.url },
//                       "Go to News Page →"
//                     )
//                   ),
//                   React.createElement(
//                     "td",
//                     { className: "p-3 w-[14rem]" },
//                     news?.title
//                   ),
//                   React.createElement(
//                     "td",
//                     { className: "p-3" },
//                     news?.description
//                   ),
//                   React.createElement(
//                     "td",
//                     { className: "p-3" },
//                     React.createElement(
//                       "button",
//                       {
//                         className: "font-bold underline",
//                         onClick: () => {
//                           deleteSaved(news?.title);
//                           return confirm("Yakin ingin menghapus berita ini?");
//                         },
//                       },
//                       "Delete"
//                     )
//                   )
//                 )
//               )
//             )
//           )
//         )
//       : React.createElement(
//           "h3",
//           { className: "mt-4 text-2xl text-primary text-center" },
//           "No saved news"
//         )
//   );
// }
