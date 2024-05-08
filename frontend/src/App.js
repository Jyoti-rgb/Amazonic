import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import data from "./data.js";
// import Product from "./components/Product.js";

import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
function App() {
  // const { id } = useParams();
  // const product = data.products.find((x) => x._id === id);
  // console.log(product);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <a href="/">amazonic</a>
          </div>
          <div className="header-links">
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main className="main">
          <Routes>
            <Route path="product/:id" Component={ProductScreen} />
            <Route path="/" Component={HomeScreen} exact />
          </Routes>
        </main>
        <footer className="footer">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
