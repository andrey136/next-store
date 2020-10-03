import React from "react";

class InnerTeaserCol extends React.Component {

  render() {

    return (
        <div className="hp-teaser">
          <a href="">
            <div className="hp-teaser-h3-underline">
              <img src={this.props.pic} alt=""/>
              <h3>{this.props.entry}</h3>
            </div>
          </a>
          <a href="">
            <div className="ShopNowBtn">
              <button>Shop Now</button>
            </div>
          </a>
        </div>
    );
  }
}

export default InnerTeaserCol;