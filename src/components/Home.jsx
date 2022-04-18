import React from "react";
import { useState, useEffect } from "react";
import hero from "../images/front_img.png";
import NA from "../images/download.jpg"
import { NavLink } from "react-router-dom";

function Home() {
  const [book1, setBook1] = useState([]);
  const [book2, setBook2] = useState([]);
  const [book3, setBook3] = useState([]);
  const [book4, setBook4] = useState([]);

  const api_url1 =
    "https://www.googleapis.com/books/v1/volumes?q=business:keyes&key=AIzaSyAgAwC5R1PfmsIa9UWJZpePvhJfzgfdvko";

  const api_url2 =
    "https://www.googleapis.com/books/v1/volumes?q=investing:keyes&key=AIzaSyAgAwC5R1PfmsIa9UWJZpePvhJfzgfdvko";

  const api_url3 =
    "https://www.googleapis.com/books/v1/volumes?q=harry+potter:keyes&key=AIzaSyAgAwC5R1PfmsIa9UWJZpePvhJfzgfdvko";

  const api_url4 =
    "https://www.googleapis.com/books/v1/volumes?q=munshi+premchand:keyes&key=AIzaSyAgAwC5R1PfmsIa9UWJZpePvhJfzgfdvko";

  
  useEffect(() => {
    //fetching business books
    fetch(api_url1)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let bookData = data;
        let bookInfo = bookData.items;
        setBook1(bookInfo);
      });

    //fetching investing books
    fetch(api_url2)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let bookData = data;
        let bookInfo = bookData.items;
        setBook2(bookInfo);
      });

    //fetching harry potter

    fetch(api_url3)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let bookData = data;
        let bookInfo = bookData.items;
        setBook3(bookInfo);
      });

    // fetching munshi premchand
    fetch(api_url4)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let bookData = data;
        let bookInfo = bookData.items;
        setBook4(bookInfo);
      });
  }, []);

  let categoryArray = [
    ["Top Business Books", book1],
    ["Top Investment Books", book2],
    ["Harry Potter Books", book3],
    ["Top Indian Novels", book4],
  ];

  return (
    <div>
      <div className="home">
        <div className="left">
          <div className="style"></div>
          <img alt="hero" src={hero} />
        </div>
        <div className="right">
          <h1>SuperFast Delivery in 48 hours</h1>
        </div>
      </div>
      {categoryArray.map((singleArray) => {
        return (
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
              <h5>{singleArray[0]}</h5>
              <span>scroll right👉</span>
            </div>
            <div className="product_one">
              {singleArray[1].map((singleBook) => {
                let BookTitle = singleBook.volumeInfo.title;
                let BookID = singleBook.id;

                return (
                  <div
                    className="container content"
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
                          src={singleBook.volumeInfo.hasOwnProperty("imageLinks")
                  ? singleBook.volumeInfo.imageLinks.thumbnail
                  : NA}
                          className="card-img-top"
                          alt={BookTitle}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{BookTitle}</h5>
                          <p className="card-text">₹ {singleBook.saleInfo.hasOwnProperty("listPrice") ? singleBook.saleInfo.listPrice.amount : "400"}</p>
                          <NavLink
                            state={{
                              book1: book1,
                              book2: book2,
                              book3: book3,
                              book4: book4,
                            }}
                            exact
                            to={`/product/${BookID}`}
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
        );
      })}
    </div>
  );
}

export default Home;
