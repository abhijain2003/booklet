import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";

function ProductInfo() {
  const proId = useParams();

  const [string, setString] = useState(false);
  const [addToCart, setAddToCart] = useState("Add to Cart");
  const [categoryValue, setCategoryValue] = useState(false);

  const dispatch = useDispatch();

  const location = useLocation();
  const { book1, book2, book3, book4 } = location.state;

  let finalArray = book1.concat(book2, book3, book4);
  
  let proDet = finalArray.filter((x) => x.id === proId.id);
  let productDetails = proDet[0];

  const handleCart = (productDetails) => {
    if (addToCart === "Add to Cart") {
      dispatch(addItem(productDetails));
      setAddToCart("Remove from Cart");
    } else {
      dispatch(delItem(productDetails));
      setAddToCart("Add to Cart");
    }
  };

  let BookPrice = "";
  if (proDet[0].saleInfo.isEbook === true) {
    BookPrice = proDet[0].saleInfo.listPrice.amount;
  } else {
    BookPrice = "400";
  }

  return (
    <div className="InfoContainer">
      <div className="ImageBar">
        <img alt="" src={proDet[0].volumeInfo.imageLinks.thumbnail} />
      </div>
      <div className="InfoBar">
        <div className="innerTitleBar">
          <h1>{proDet[0].volumeInfo.title}</h1>
          <p style={categoryValue ? { display: "none" } : {}}>
            {proDet[0].volumeInfo.categories === undefined
              ? setCategoryValue(true)
              : proDet[0].volumeInfo.categories}
          </p>
        </div>
        <div className="innerPriceBar">
          <div style={{ display: "flex" }}>
            <p>
              ₹ {BookPrice}</p>
            <button
              onClick={() => handleCart(productDetails)}
              style={{ marginLeft: "25px" }}
            >
              {addToCart}
            </button>
          </div>
        </div>
        <div className="innerMidBar">
          <div className="innerAuthorBar">
            <h5>Author</h5>
            <p>{proDet[0].volumeInfo.authors}</p>
          </div>
          <div className="innerPageBar">
            <h5>Pages</h5>
            <p>{proDet[0].volumeInfo.pageCount}</p>
          </div>
          <div className="innerRatingBar">
            <h5>Ratings</h5>
            <p>
              {proDet[0].volumeInfo.ratingsCount === undefined
                ? "0⭐"
                : proDet[0].volumeInfo.ratingsCount + "⭐"}
            </p>
          </div>
          <div className="innerPublishBar">
            <h5>Publisher</h5>
            <p>
              {proDet[0].volumeInfo.publisher === undefined
                ? "NA"
                : proDet[0].volumeInfo.publisher}
            </p>
          </div>
        </div>
        <div className="innerDescripBar">
          <h5>Product Description</h5>
          <p>
            {proDet[0].volumeInfo.description === undefined
              ? proDet[0].volumeInfo.description
              : string
              ? proDet[0].volumeInfo.description
              : proDet[0].volumeInfo.description.substring(0, 100) + "..."}
            <button
              onClick={() => {
                setString(!string);
              }}
            >
              {proDet[0].volumeInfo.description === undefined
                ? "not available"
                : string
                ? "Read Less"
                : "Read More"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
