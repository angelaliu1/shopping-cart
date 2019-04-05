import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return (
      <div className="receipt-item" key={item.name}>
      	<div className="receipt-text">
      		{item.productName} x {item.count}
      	</div>
        <div className="receipt-text">
      		${item.price}
      	</div>
      </div>
    );
  }

  calculateCost() {
    let cost = 0;
    this.props.items.forEach(item => {
      cost += item.price * item.count
    });
    return cost.toFixed(2);
  }

  render() {
    const items = this.props.items
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${this.calculateCost()}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;
