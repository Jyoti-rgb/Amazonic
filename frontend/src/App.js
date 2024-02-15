import React from "react";
import data from "./data.js";

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
              <li key={prod._id}>
                <div className="product">
                  <img
                    className="product-image"
                    src={prod.image}
                    alt="product"
                  />
                  <div className="product-details">
                    <div className="product-name">
                      <a href="product.html">{prod.name}</a>
                    </div>
                    <div className="product-brand">{prod.brand}</div>
                    <div className="product-price">${prod.price}</div>
                    <div className="product-rating">
                      {prod.numReview} Stars (10 Reviews)
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {/* <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/img_2.jpg"
                  alt="product"
                />
                <div className="product-details">
                  <div className="product-name">
                    <a href="product.html">AASK Kurta for Women Dress</a>
                  </div>
                  <div className="product-brand">AASK</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/img_3.jpg"
                  alt="product"
                />
                <div className="product-details">
                  <div className="product-name">
                    <a href="product.html">
                      AAYU FIT & Flare Georgette Calf Length Dress for Women
                    </a>
                  </div>
                  <div className="product-brand">AAYU</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/img_4.jpg"
                  alt="product"
                />
                <div className="product-details">
                  <div className="product-name">
                    <a href="product.html">
                      Sheetal Associates Women Casual Regular Sleeves Crepe
                      Solid Fit and Flare Dress
                    </a>
                  </div>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/img_5.jpg"
                  alt="product"
                />
                <div className="product-details">
                  <div className="product-name">
                    <a href="product.html">
                      QUEEN ELLIE Women's A-Line Midi Dress
                    </a>
                  </div>
                  <div className="product-brand">QUEEN</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/img_5.jpg"
                  alt="product"
                />
                <div className="product-details">
                  <div className="product-name">
                    <a href="product.html">
                      QUEEN ELLIE Women's A-Line Midi Dress
                    </a>
                  </div>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/img_5.jpg"
                  alt="product"
                />
                <div className="product-details">
                  <div className="product-name">
                    <a href="product.html">
                      QUEEN ELLIE Women's A-Line Midi Dress
                    </a>
                  </div>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/img_6.jpg"
                  alt="product"
                />
                <div className="product-details">
                  <div className="product-name">
                    <a href="product.html">Western Dresses for Women</a>
                  </div>
                  <div className="product-brand">QUEEN</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </main>
      <footer className="footer">All right reserved</footer>
    </div>
  );
}

export default App;
