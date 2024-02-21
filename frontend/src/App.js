import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import data from "./data.js";
// import Product from "./components/Product.js";

import HomeScreen from "./screens/HomeScreen.js";
// import ProductScreen from "./screens/ProductScreen.js";

function App() {
  // const { id } = useParams();
  // const product = data.products.find((x) => x._id === id);
  // console.log(product);
  return (
    // <div>hello </div>
    <BrowserRouter>
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
          <Routes>
            {/* <Route path="/product/:id" Component={ProductScreen} /> */}
            <Route path="/" Component={HomeScreen} />
          </Routes>
        </main>
        <footer className="footer">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
