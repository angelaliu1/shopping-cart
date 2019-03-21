import React from "react";
import "./styles/cart.css";
import Product from "./Product.js"
import ProductData from "./Data"

class Cart extends React.Component {

  render() {
    return (
        <div className="page-content">
            <div class="ui cards">
              {ProductData.products.map(p => (<Product productName={p.name} price={p.cost} limit={p.stock}/>))}
            </div>
        </div>
    );
  }

}

export default Cart;
