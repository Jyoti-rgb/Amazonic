import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import CartScreen from "./screens/CartScreen.js";
import { useSelector } from "react-redux";
import SigninScreen from "./screens/SigninScreen.js";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // const { id } = useParams();
  // const product = data.products.find((x) => x._id === id);
  // console.log(product);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <Link to="/">amazonic</Link>
          </div>
          <div className="header-links">
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="bidge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" Component={HomeScreen} exact />
            <Route path="/cart/:id?" Component={CartScreen} />
            <Route path="product/:id" Component={ProductScreen} />
            <Route path="/signin" Component={SigninScreen} />
          </Routes>
        </main>
        <footer className="footer">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
