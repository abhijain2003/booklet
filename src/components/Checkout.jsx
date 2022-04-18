import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { delItem } from "../redux/actions/index";

function Checkout() {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  useEffect(() => {
    const plus = document.querySelector(".plus"),
      minus = document.querySelector(".minus"),
      num = document.querySelector(".num");
    let a = 1;
    plus.addEventListener("click", () => {
      a++;
      a = a < 10 ? a : a;
      num.innerText = a;
    });

    minus.addEventListener("click", () => {
      if (a > 1) {
        a--;
        a = a < 10 ?  a : a;
        num.innerText = a;
      }
    });
  }, []);

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img alt="" src={cartItem.volumeInfo.imageLinks.thumbnail} />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.volumeInfo.title}</h3>
              <p>
                {cartItem.saleInfo.isEbook === false
                  ? "400"
                  : cartItem.saleInfo.listPrice.amount}
              </p>
            </div>
           <div style={{height: '40px', width: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '12px', boxShadow: '0 5px 10px rgba(0,0,0,0.2)'}} className="wrapper">
              <span style={{width: '100%', textAlign: 'center', fontSize: '25px', fontWeight: '600', cursor: 'pointer', userSelect: 'none'}} className="minus">-</span>
              <span style={{pointerEvents: 'none', borderLeft: '2px solid rgba(0,0,0,0.2)', borderRight: '2px solid rgba(0,0,0,0.2)', fontSize: '25px', width: '100%', textAlign: 'center', fontSize: '25px', fontWeight: '600', cursor: 'pointer', userSelect: 'none'}} className="num">1</span>
              <span style={{width: '100%', textAlign: 'center', fontSize: '25px', fontWeight: '600', cursor: 'pointer', userSelect: 'none'}} className="plus">+</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const empty = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="py-4">
          <div className="row">
            <h3>Your Cart is empty</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {state.length === 0 && empty()}
      {state.length !== 0 && state.map(cartItems)}
    </div>
  );
}

export default Checkout;
