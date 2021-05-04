import { useState, useReducer, useEffect } from "react";
import { useCart } from "./cart-context";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Cart from "./cartComponent";
import ProductListing from "./productList";
import WishList from "./wishlist";
import ErrorPage from "./error";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import "./gcomponents.css";
import "./styles.css";
import ProductCard from "./components/Cards";
const outOfStock = (state) => {
  return {
    ...state,
    productList: productList.sort((a, b) => (a.in_stock ? -1 : 1)),
  };
};

const sortByPrice = (currentState, action) => {
  if (action.payload == "HIGH_TO_LOW") {
    console.log("working");
    return {
      ...currentState,
      productList: currentState.productList.sort((a, b) => b.price - a.price),
    };
  } else if (action.payload === "LOW_TO_HIGH") {
    return {
      ...currentState,
      productList: productList.sort((a, b) => a.price - b.price),
    };
  }
  return state;
};

export default function App({ name }) {
  // const [route, setRoute] = useState("products");
  return (
    <div className="App">
      <Navbar />
      <Link to="/products">Home</Link>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="products" element={<ProductListing />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
