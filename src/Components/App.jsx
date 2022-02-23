import React from "react";
import Products from "./product";

const App = () => {
  return (<>
 <table class="table">
  <thead>
    <tr>
      <th scope="col" className="id">#</th>
      <th scope="col" className="name">Name</th>
      <th scope="col" className="price">Price</th>
      <th scope="col" className="left">Left</th>
      <th scope="col" className="image">Image</th>
    </tr>
  </thead>
  <tbody>
    <Products/>
  </tbody>
</table>
  </>)
};

export default App;
