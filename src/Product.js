import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 0
    // };
  }


  // addToCart(productName) {
  //   if (this.props.limit === 0) {
  //     alert("This item is out of stock!");
  //   } else if (this.state.count >= this.props.limit) {
  //     alert("There are too many " + this.props.productName + "s in your cart!");
  //   } else {
  //     this.setState({count: this.state.count + 1 }, () => {
  //       alert("There are " + this.state.count + " " + this.props.productName + "s in your cart!");
  //     });
  //   }
  // }

  render() {
    return (
      <div class="ui card">
        <div class="content">
          <div class="header">{this.props.productName}</div>
          <div class="description">
            Price: ${this.props.price}
          </div>
        </div>
        <div class="ui bottom attached button" onClick={() => this.props.onAddToCart(this.props.productName, this.props.price)}>
          <i class="add icon"></i>
          Add to Cart
        </div>
        <div class="ui bottom attached button" onClick={() => this.props.onRemoveFromCart(this.props.productName)}>
          <i class="remove icon"></i>
          Remove from Cart
        </div>
      </div>
    )
  }
}

export default Product;
