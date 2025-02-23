import React from "react";
import { Collection } from "./components/collection";
import { NewProduct } from "./components/newProduct";
import { DiscountProduct } from "./components/discount";

export const Home = () => {
  return (
    <>
      <Collection />
      <NewProduct />
      <DiscountProduct />
    </>
  );
};
