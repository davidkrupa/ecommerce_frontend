"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice((prev) => prev + product.price * quantity);
    setTotalQuantities((prev) => prev + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }

    // toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const onRemove = (product, id) => {
    foundProduct = cartItems.find((item) => item._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    setTotalPrice((prev) => prev - foundProduct.price * foundProduct.quantity);
    setTotalQuantities((prev) => prev - foundProduct.quantity);
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    // const newCartItems = cartItems.filter((item) => item._id !== id);
    // const newCartItems = cartItems.map((item) => {
    //   if (item._id === id) return { ...item, quantity: item.quantity + 1 };
    //   else return item;
    // });

    if (value === "inc") {
      // setCartItems([
      //   ...newCartItems,
      //   { ...foundProduct, quantity: foundProduct.quantity + 1 },
      // ]);
      const newCartItems = cartItems.map((item) => {
        if (item._id === id) return { ...item, quantity: item.quantity + 1 };
        else return item;
      });
      setCartItems(newCartItems);
      setTotalPrice((prev) => prev + foundProduct.price);
      setTotalQuantities((prev) => prev + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        // change the way products are updated - product after update goes to end of the list
        // setCartItems([
        //   ...newCartItems,
        //   { ...foundProduct, quantity: foundProduct.quantity - 1 },
        // ]);
        const newCartItems = cartItems.map((item) => {
          if (item._id === id) return { ...item, quantity: item.quantity - 1 };
          else return item;
        });
        setCartItems(newCartItems);
        setTotalPrice((prev) => prev - foundProduct.price);
        setTotalQuantities((prev) => prev - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty === 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        setQty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
