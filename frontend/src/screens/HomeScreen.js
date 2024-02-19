import React from "react";
import data from "../data.js";
import Product from "../components/Product.js";

function HomeScreen() {
  return (
    <>
      <div className="content">
        <ul className="products">
          {data.products.map((prod) => (
            <Product key={prod._id} product={prod} />
          ))}
        </ul>
      </div>
    </>
  );
}
export default HomeScreen;
