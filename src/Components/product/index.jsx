import React from "react";
import products from "../../Products";
import Product from "./Products";

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
