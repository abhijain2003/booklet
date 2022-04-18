import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NA from "../images/download.jpg";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addItem, delItem } from "../redux/actions/index";

function FindProduct() {
  const location = useLocation();
  const { inpVal } = location.state;
  const dispatch = useDispatch();

  const [string, setString] = useState(false);
  const [addToCart, setAddToCart] = useState("Add to Cart");
  const [searchBook, setSearchBook] = useState([]);
  const [categoryValue, setCategoryValue] = useState(false);

  useEffect(() => {
    let api_url =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      inpVal.replaceAll(/\s/g, "") +
      ":keyes&key=AIzaSyAgAwC5R1PfmsIa9UWJZpePvhJfzgfdvko";
    fetch(api_url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let dataArray = data.items;
        setSearchBook(dataArray);
        return dataArray;
      });
  }, []);

  let productDetails;
  function setAPI() {
    if (searchBook.length !== 0) {
      productDetails = searchBook[0];
    }
    return productDetails;
  }

  setAPI();
  console.log(searchBook);
  console.log(productDetails);

  const handleCart = (productDetails) => {
    if (addToCart === "Add to Cart") {
      dispatch(addItem(productDetails));
      setAddToCart("Remove from Cart");
    } else {
      dispatch(delItem(productDetails));
      setAddToCart("Add to Cart");
    }
  };

  return (
    <div>
      {productDetails !== undefined ? (
        <div className="InfoContainer">
          <div className="ImageBar">
            <img
              alt=""
              src={
                productDetails.volumeInfo.hasOwnProperty("imageLinks")
                  ? productDetails.volumeInfo.imageLinks.thumbnail
                  : NA
              }
            />
          </div>
          <div className="InfoBar">
            <div className="innerTitleBar">
              <h1>{productDetails.volumeInfo.title}</h1>
              <p style={categoryValue ? { display: "none" } : {}}>
                {productDetails.volumeInfo.categories === undefined
                  ? setCategoryValue(true)
                  : productDetails.volumeInfo.categories}
              </p>
            </div>
            <div className="innerPriceBar">
              <div style={{ display: "flex" }}>
                <p>
                  ₹{" "}
                  {productDetails.saleInfo.isEbook === true
                    ? productDetails.saleInfo.listPrice.amount
                    : "400"}
                </p>
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
                <p>{productDetails.volumeInfo.authors}</p>
              </div>
              <div className="innerPageBar">
                <h5>Pages</h5>
                <p>{productDetails.volumeInfo.pageCount}</p>
              </div>
              <div className="innerRatingBar">
                <h5>Ratings</h5>
                <p>
                  {productDetails.volumeInfo.ratingsCount === undefined
                    ? "0⭐"
                    : productDetails.volumeInfo.ratingsCount + "⭐"}
                </p>
              </div>
              <div className="innerPublishBar">
                <h5>Publisher</h5>
                <p>
                  {productDetails.volumeInfo.publisher === undefined
                    ? "NA"
                    : productDetails.volumeInfo.publisher}
                </p>
              </div>
            </div>
            <div className="innerDescripBar">
              <h5>Product Description</h5>
              <p>
                {productDetails.volumeInfo.description === undefined
                  ? productDetails.volumeInfo.description
                  : string
                  ? productDetails.volumeInfo.description
                  : productDetails.volumeInfo.description.substring(0, 100) +
                    "..."}
                <button
                  onClick={() => {
                    setString(!string);
                  }}
                >
                  {productDetails.volumeInfo.description === undefined
                    ? "not available"
                    : string
                    ? "Read Less"
                    : "Read More"}
                </button>
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <div className="product_box">
            <div
              style={{
                display: "flex",
                width: "95%",
                justifyContent: "space-between",
                color: "#9fb4ff",
                margin: "50px auto 0",
              }}
            >
              <h5>More from your search</h5>
              <span>scroll right👉</span>
            </div>
            <div className="product_one">
              {searchBook.map((singleBook) => {
                let BookTitle = singleBook.volumeInfo.title;
                let BookImage = singleBook.volumeInfo.imageLinks.thumbnail;
                let BookID = singleBook.id;
                let BookPrice = "";
                if (singleBook.saleInfo.isEbook === true) {
                  BookPrice = singleBook.saleInfo.listPrice.amount;
                } else {
                  BookPrice = "400";
                }

                return (
                  <div
                    className="container"
                    style={{ width: "200px", marginRight: "5px" }}
                  >
                    <div className="row justify-content-around">
                      <div
                        className="card"
                        style={{ width: "18rem", textAlign: "center" }}
                      >
                        <img
                          style={{
                            width: "162px",
                            height: "209px",
                            margin: "0 auto",
                          }}
                          src={BookImage}
                          className="card-img-top"
                          alt={BookTitle}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{BookTitle}</h5>
                          <p className="card-text">₹ {BookPrice}</p>
                          <NavLink
                          state={{
                            searchBook: searchBook,
                          }}
                            exact
                            to={`/yourSearchProduct/${BookID}`}
                            className="btn btn-outline-success"
                          >
                            Buy Now
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
    </div>
  );
}

export default FindProduct;
