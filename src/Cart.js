import React from "react";
import "./styles/cart.css";
import Product from "./Product.js"
import ProductData from "./Data"
import Receipt from "./Receipt"

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
  }

  handleAddToCart(productName, price) {
    let cart = [...this.state.cartItems]
    let add = true
    for (let i=0; i < cart.length; i++) {
      if (cart[i].productName === productName) {
        add = false
        cart[i].count += 1
      }
    }
    if (add) {
      cart.push({productName: productName, price: price, count: 1})
    }
    this.setState({cartItems: cart})
  }

  handleRemoveFromCart(productName) {
    let cart = [...this.state.cartItems]
    let remove = true
    for (let i=0; i < cart.length; i++) {
      if (cart[i].productName === productName && cart[i].count > 1) {
        remove = false
        cart[i].count -= 1
      }
    }
    if (remove) {
      let filteredCart = cart.filter(item => item.productName !== productName)
      cart = filteredCart
    }
    this.setState({cartItems: cart})
  }

  render() {
    return (
        <div className="page-content">
            <div class="ui cards">
              {ProductData.products.map(p => (
                <Product
                  productName={p.name}
                  price={p.cost}
                  onAddToCart={() => this.handleAddToCart(p.name, p.cost)}
                  onRemoveFromCart={() => this.handleRemoveFromCart(p.name)}
                  />))}
            </div>
            <Receipt items={this.state.cartItems}/>
        </div>
    );
  }

}

export default Cart;
