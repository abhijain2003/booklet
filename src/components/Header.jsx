import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import Logins from "./Login";
import SignUp from "./SignUp";

function Header() {
  const [inpVal, setInpVal] = useState("");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <NavLink className="navbar-brand fw-bold logo" exact to="/">
            Booket
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="custom-navbar collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <form className="d-flex">
              <NavLink exact to="/yourSearch" state={{ inpVal: inpVal }}>
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </NavLink>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setInpVal(e.target.value)}
              />
            </form>
            <NavLink
              className="navbar-brand mx-auto fw-bold innerLogo"
              exact
              to="/"
            >
              Booket
            </NavLink>
            <div className="d-flex navbar-btns">
              <Logins />
              <SignUp />
              <Basket />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
