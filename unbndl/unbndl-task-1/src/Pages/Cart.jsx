import React, { useState, useEffect } from "react";
import "../Styles/Cart.scss";
import toast from "react-hot-toast";
import Navbar from "../Components/Navbar";
function Cart() {
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return storedCart;
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const increaseQuantity = (item) => {
    const updatedCart = [...cart];
    const currentItem = updatedCart.find(
      (cartItem) => cartItem.name === item.name
    );
    currentItem.quantity += 1;

    setCart(updatedCart);
  };

  const decreaseQuantity = (item) => {
    const updatedCart = [...cart];
    const currentItem = updatedCart.find(
      (cartItem) => cartItem.name === item.name
    );

    if (currentItem.quantity > 1) {
      currentItem.quantity -= 1;
    }

    setCart(updatedCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.name !== item.name);

    setCart(updatedCart);
    toast.success("item removed successfully !", {
      style: {
        borderRadius: "50px",
        background: "#000428",
        color: "#ffffff",
        padding: "1rem 1.5rem",
        fontWeight: "600",
      },
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <Navbar cartLength={cart.length} />
      <div className="cart-container" id="cart-container">
        <h1>Total Products in Cart: {cart.length}</h1>
        <div className="cart-items">
          {cart.map((item, index) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt="Product Image" />
              <p>{item.name}</p>
              <p>₹ {item.price}</p>
              <button onClick={() => decreaseQuantity(item)}>-</button>
              <p>Qty: {item.quantity}</p>
              <button onClick={() => increaseQuantity(item)}>+</button>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <div className="totalpay">
            <p>Total:</p>
            <p>₹ {getTotalPrice().toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
