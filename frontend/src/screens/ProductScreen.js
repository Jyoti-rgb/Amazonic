import React, { useEffect } from "react";
import Rating from "../components/Rating.js";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox.js";
import MessageBox from "../components/MessageBox.js";
import { detailProduct } from "../actions/productActions.js";

function ProductScreen() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(detailProduct(id));
  }, [dispatch, id]);

  // const { id } = useParams();
  // const product = data.products.find((x) => x._id === id);
  // const product = product.find((x) => x._id === id);

  // const product = data.products.find((x) => x._id === props.match.params.id);

  return (
    <>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="product-col m-t-25">
          <Link to={"/"}>Back to result</Link>
          <div className="row top">
            <div className="col-2">
              {/* <img className="large" src={product.image} alt={product.name} /> */}
              <img className="large" src={product.image} alt="product" />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReview={product.numReview}
                  ></Rating>
                </li>
                <li>Price : ${product.price}</li>
                <li>Description : ${product.description}</li>
              </ul>
            </div>
            <div className="col-1 cart-box">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="primary cart-btn ">Add to Cart</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <div className="product-col m-t-25">
        <Link to={"/"}>Back to result</Link>
        <div className="row top">
          <div className="col-2">
            <img className="large" src={product.image} alt={product.name} />
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <Rating
                  rating={product.rating}
                  numReview={product.numReview}
                ></Rating>
              </li>
              <li>Price : ${product.price}</li>
              <li>Description : ${product.description}</li>
            </ul>
          </div>
          <div className="col-1 cart-box">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Price</div>
                    <div className="price">${product.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>status</div>
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="success">In Stock</span>
                      ) : (
                        <span className="danger">Unavailable</span>
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <button className="primary cart-btn ">Add to Cart</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default ProductScreen;
