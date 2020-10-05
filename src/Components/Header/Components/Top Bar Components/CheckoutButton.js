import React from "react";

class CheckoutButton extends React.Component {

  render() {
    return (
      <div className="Checkout">
        <a className="nxbtn primary disabled" data-link-id="01-08" data-link-name="Checkout"
           rel="nofollow">{this.props.json_data.txt}</a>
      </div>
    );
  }
}

export default CheckoutButton;