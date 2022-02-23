import React from "react";

const Product = (props) => {
  return (
    <>
      <th scope="row" className="id">{props.id}</th>
      <td  className="name">{props.name}</td>
      <td className="price">{props.price}</td>
      <td className="left">{props.left}</td>
      <td className="image"><img alt="" src={props.image}/></td>
    </>
  );
};

export default Product;
