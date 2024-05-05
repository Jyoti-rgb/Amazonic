import React, { useEffect, useState } from "react";
import axios from "axios";
// import data from "../data.js";
import Product from "../components/Product.js";
import LoadingBox from "../components/LoadingBox.js";
import MessageBox from "../components/MessageBox.js";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions.js";

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axios.get("/api/products");
  //       setLoading(false);
  //       setProducts(data);
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const productList = useSelector((state) => state.productList);
  // const { loading, error, products } = productList;
  // useEffect(() => {
  //   dispatch(listProducts());
  // }, []);

  return (
    <>
      {/* {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="content">
          <ul className="products">
            {products.map((prod) => (
              <Product key={prod._id} product={prod} />
            ))}
          </ul>
        </div>
      )} */}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="content">
          <ul className="products">
            {products.map((prod) => (
              <Product key={prod._id} product={prod} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
export default HomeScreen;
