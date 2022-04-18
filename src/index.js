import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductInfo from "./components/ProductInfo";
import { Provider } from "react-redux";
import store from "./redux/store";
import Checkout from "./components/Checkout";
import FindProduct from "./components/FindProduct";
import SearchProductInfo from "./components/SearchProductInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<Checkout />} />
        <Route path="/yourSearch" element={<FindProduct />} />
        <Route path="/yourSearchProduct/:id" element={<SearchProductInfo />} />
      </Routes>
      <Footer />
    </Provider>
  </BrowserRouter>
);

