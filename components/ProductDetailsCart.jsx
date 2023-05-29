"use client";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import { useEffect } from "react";

const ProductDetailsCart = ({ product }) => {
  const { decQty, incQty, qty, setQty, onAdd, setShowCart } = useStateContext();

  useEffect(() => {
    setQty(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <>
      <div className="quantity">
        <h3>Quantity</h3>
        <p className="quantity-desc">
          <span className="minus" onClick={decQty}>
            <AiOutlineMinus />
          </span>
          <span className="num prevent-select">{qty}</span>
          <span className="plus" onClick={incQty}>
            <AiOutlinePlus />
          </span>
        </p>
      </div>
      <div className="buttons">
        <button
          type="button"
          className="add-to-cart"
          onClick={() => onAdd(product, qty)}
        >
          Add to Cart
        </button>
        <button
          type="button"
          className="buy-now"
          onClick={() => handleBuyNow()}
        >
          Buy Now
        </button>
      </div>
    </>
  );
};

export default ProductDetailsCart;
