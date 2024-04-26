import React, { createContext, useState, useEffect, children } from "react";

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // product stage
  const [products, setProducts] = useState([]);
  //fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const responce = await fetch("https://fakestoreapi.com/products");
      const data = await responce.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
