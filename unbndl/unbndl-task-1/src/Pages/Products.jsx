import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/Products.scss";
import Amul from "../assets/Amul.jpg";
import FerreroRocher from "../assets/Ferrero Rocher.jpg";
import CadburyusePeanut from "../assets/Cadbury Fuse Peanut.jpg";
import KITKAT from "../assets/KITKAT.jpg";
import ConfetteriaFerrero from "../assets/Confetteria.jpg";
import CadburyFusePeanut from "../assets/fuse.jpg";
import Snickers from "../assets/Snickers.jpg";
import Bounty from "../assets/Bounty.jpg";
import Bournville from "../assets/Bournville.jpg";
import Gems from "../assets/Gems.jpg";
import Luscious from "../assets/Luscious.jpg";
import toast from "react-hot-toast";
import Navbar from "../Components/Navbar";
import Kinder from "../assets/kinder.jpg";
const availableItemsData = [
  {
    name: "Ferrero Rocher",
    image: FerreroRocher,
    price: 549,
    category: "Pantai",
  },
  {
    name: "Cadbury Fuse Family",
    image: CadburyusePeanut,
    price: 440,
    category: "Cadbury",
  },
  {
    name: "Nestlé KITKAT",
    image: KITKAT,
    price: 60,
    category: "KIT KAT",
  },
  {
    name: "Amul Dark chocolate",
    image: Amul,
    price: 390,
    category: "Amul",
  },
  {
    name: "Confetteria Ferrero",
    image: ConfetteriaFerrero,
    price: 898,
    category: "Confetteria",
  },
  {
    name: "Cadbury Fuse Peanut",
    image: CadburyFusePeanut,
    price: 20,
    category: "Cadbury",
  },
  {
    name: "Snickers Family Treat",
    image: Snickers,
    price: 145,
    category: "Snickers",
  },
  {
    name: "Bounty Miniature Milk",
    image: Bounty,
    price: 149,
    category: "Bounty",
  },
  {
    name: "Cadbury Bournville",
    image: Bournville,
    price: 99,
    category: "Cadbury",
  },
  {
    name: "Cadbury Gems",
    image: Gems,
    price: 36,
    category: "Cadbury",
  },
  {
    name: "LuvIt Luscious Fruit",
    image: Luscious,
    price: 97,
    category: "Luscious",
  },
  {
    name: "Kinder Joy ",
    image: Kinder,
    price: 45,
    category: "Kinder Joy ",
  },
];
function Products() {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    setCartLength(storedCart.length);
  }, []);

  const addToCart = (item) => {
    const itemName = item.name.trim().toLowerCase();

    const itemAlreadyInCart = cart.some(
      (cartItem) => cartItem.name.trim().toLowerCase() === itemName
    );

    if (itemAlreadyInCart) {
      alert("Item is already in the cart.");
    } else {
      try {
        const updatedCart = [...cart, { ...item, quantity: 1 }];

        if (updatedCart.length > 8) {
          throw new Error("Maximum of 8 items allowed in the cart.");
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCartLength(updatedCart.length);
        toast.success("Added to Cart !", {
          style: {
            borderRadius: "50px",
            background: "#000428",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
          },
        });
      } catch (error) {
        toast.error(error.message, {
          style: {
            borderRadius: "50px",
            background: "#000428",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
          },
        });
      }
    }
  };

  return (
    <>
      <Navbar cartLength={cartLength} />
      <div>
        <div style={{ textAlign: "center", color: "teal", margin: "25px 0" }}>
          <h1>QUICK BUY! Get Your Chocolates Bundle Now</h1>
        </div>

        <div className="offer" id="offer">
          {availableItemsData.map((item) => (
            <div className="card_offer">
              <div className="brand_image">
                <img src={item.image} alt="" />
              </div>
              <div className="title">
                <span>{item.name}</span>
                <p>₹ {item.price.toFixed(2)}</p>
                {cart.find((cartItem) => cartItem.name === item.name) ? (
                  <button className="disabled" disabled>
                    Added to Cart
                  </button>
                ) : (
                  <button className="addtocart" onClick={() => addToCart(item)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
