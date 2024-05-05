import React from "react";
import data from "../data.js";
import Rating from "../components/Rating.js";
import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import Product from "../components/Product.js";

function ProductScreen() {
  const { id } = useParams();
  const product = data.products.find((x) => x._id === id);

  if (!product) {
    return <div>Product Not Found</div>;
  }
  // const product = data.product.find((x) => x._id === props.match.params.id);

  return (
    <>
      <div className="product-col m-t-25">
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
      </div>
    </>

    // <div className="product-col">
    //   <Link to="/">Back to result</Link>
    //   <div className="row top">
    //     <div className="col-2">
    //       <img className="large" src={product.image} alt="default" />
    //     </div>
    //     <div className="col-1">
    //       <ul>
    //         <li>
    //           <h3>{product.name}</h3>
    //         </li>
    //         <li>
    //           <Rating rating={product.rating} numReviews={product.numReview} />
    //         </li>
    //         <li>Price: ${product.price}</li>
    //         <li>
    //           Description:
    //           <p>{product.description}</p>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="col-1 col-box">
    //       <div className="card card-body">
    //         <ul>
    //           <li>
    //             <div className="row">
    //               <div>Price</div>
    //               <div className="price">${product.price}</div>
    //             </div>
    //           </li>
    //           <li>
    //             <div className="row">
    //               <div>Status</div>
    //               <div>
    //                 {product.countInStock > 0 ? (
    //                   <span className="success">In Stock</span>
    //                 ) : (
    //                   <span className="danger">Unavailable</span>
    //                 )}
    //               </div>
    //             </div>
    //           </li>
    //           <li>
    //             <button className="primary block">Add to Cart</button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
export default ProductScreen;
