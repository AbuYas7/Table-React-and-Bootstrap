import React from "react";
import products from "../../products";
import Product from "./Product";

const Products = () => {
  return (
    <>
      {products.map((product) => {
        return (
          <tr key={product.id}>
            <Product
              id={product.id}
              name={product.name}
              price={product.price}
              left={product.left}
              image={product.image}
            />
          </tr>
        );
      })}
    </>
  );
};

export default Products;
