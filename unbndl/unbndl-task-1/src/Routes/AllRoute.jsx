import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../Pages/Products";
import Cart from "../Pages/Cart";

function AllRoute() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Products />} />
        <Route path={"/cart"} element={<Cart />} />
      </Routes>
    </>
  );
}

export default AllRoute;
