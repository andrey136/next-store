import React from "react";

class ShoppingBagIcon extends React.Component {

  render() {

    return (

          <div className="BagSummary MiniBagNonSecure">
            <a data-link-id="01-07" data-link-name="Shopping Bag"
               rel="nofollow">
              <div className="Icon" onClick={() => this.props.change_show_bag_dialogue()}>
                <span>{this.props.state.shopping_bag_number}</span>
              </div>
              <div className="BagTextClipping  nextDisplayNone">
                <div id="bagtext" className="BagSummaryText">0.00 руб</div>
              </div>
            </a>
          </div>

    );
  }
}

export default ShoppingBagIcon;