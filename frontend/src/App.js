import React from "react";
import data from "./data.js";
import Product from "./components/Product.js";
function App() {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <a href="index.html">amazonic</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main className="main">
        <div className="content">
          <ul className="products">
            {data.products.map((prod) => (
              <Product key={prod._id} product={prod} />
            ))}
          </ul>
        </div>
      </main>
      <footer className="footer">All right reserved</footer>
    </div>
  );
}

export default App;
