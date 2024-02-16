import Rating from "./Rating";

function Product(props) {
  const { product } = props;
  return (
    <>
      <li key={product._id}>
        <div className="product">
          <img className="product-image" src={product.image} alt="productuct" />
          <div className="product-details">
            <div className="product-name">
              <a href="product.html">{product.name}</a>
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
