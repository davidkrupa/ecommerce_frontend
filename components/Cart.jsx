"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { Toast } from "react-hot-toast";
import Image from "next/image";

import { useStateContext } from "../context/StateContext";
import getStripe from "@api/getStripe";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    showCart,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();
  const preventSelect = {
    userDrag: "none",
    userSelect: "none",
  };

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/payment/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <>
      {showCart && (
        <div className="cart-wrapper" ref={cartRef}>
          <div className="cart-container">
            <button
              type="button"
              className="cart-heading"
              onClick={() => setShowCart(false)}
            >
              <AiOutlineLeft />
              <span className="heading">Your Cart</span>
              <span className="cart-num-items">({totalQuantities} items)</span>
            </button>

            {cartItems.length < 1 && (
              <div className="empty-cart">
                <AiOutlineShopping size={150} />
                <h3>Your shopping bag is empty</h3>
                <Link href="/">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setShowCart(false)}
                  >
                    Continue Shopping
                  </button>
                </Link>
              </div>
            )}

            <div className="product-container">
              {cartItems.length >= 1 &&
                cartItems.map((item, index) => (
                  <div className="product" key={index}>
                    <div className="cart-product-image .prevent-select">
                      <Image
                        src={item?.image[0]}
                        width={150}
                        height={150}
                        alt="product-in-cart"
                        style={preventSelect}
                      />
                    </div>
                    <div className="item-desc">
                      <div className="flex top">
                        <h5>{item.name}</h5>
                        <h4>${item.price}</h4>
                      </div>
                      <div className="flex bottom">
                        <div>
                          <p className="quantity-desc">
                            <span
                              className="minus"
                              onClick={() =>
                                toggleCartItemQuantity(item._id, "dec")
                              }
                            >
                              <AiOutlineMinus />
                            </span>
                            <span className="num prevent-select">
                              {item.quantity}
                            </span>
                            <span
                              className="plus"
                              onClick={() =>
                                toggleCartItemQuantity(item._id, "inc")
                              }
                            >
                              <AiOutlinePlus />
                            </span>
                          </p>
                        </div>
                        <button
                          type="button"
                          className="remove-item"
                          onClick={() => onRemove(item, item._id)}
                        >
                          <AiOutlineCloseCircle />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {cartItems.length >= 1 && (
              <div className="cart-bottom">
                <div className="total">
                  <h3>Subtotal:</h3>
                  <h3>{totalPrice}</h3>
                </div>
                <div className="btn-container">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleCheckout()}
                  >
                    Pay with Stripe
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
