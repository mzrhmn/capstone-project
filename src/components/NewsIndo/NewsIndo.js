import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  addProductToCart,
  removeToCart,
} from "../../store/actions/product-actions";
import { useEffect } from "react";
import "./NewsIndo.css";
// import Home from "./pages/Home";

function NewsIndo() {
  const products = useSelector((state) => state.product.list);
  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <>
      {/* <Home /> */}
      <pre>{JSON.stringify(cart, null, 2)}</pre>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Berita Indonesia</h1>
        <div className="row justify-content-center">
          {products.map((product, index) => {
            const isSaved = cart.find((item) => item.id === product.id);

            return (
              <div key={index} className="col-md-3 ">
                <div className="card shadow">
                  <img
                    src={product.image || "https://via.placeholder.com/150"}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                      {product.description || "No description available."}
                    </p>
                    <button className="btn btn-primary w-40">
                      News Detail
                    </button>{" "}
                    <button
                      className="btn btn-primary w-40"
                      onClick={() => {
                        if (isSaved) {
                          dispatch(removeToCart(product.id));
                        } else {
                          dispatch(addProductToCart(product));
                        }
                      }}
                    >
                      {isSaved ? "Unsave" : "Save"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NewsIndo;
