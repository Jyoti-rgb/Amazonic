import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product(props) {
  const { product } = props;
  return (
    <>
      <li>
        <div className="product">
          <img className="product-image" src={product.image} alt="product" />
          <div className="product-details">
            <div className="product-name">
              <Link to={`/product/${product._id}`}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">
              <Rating rating={product.rating} numReviews={product.numReview} />
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
export default Product;
