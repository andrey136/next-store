import React from "react";

class BagDialogue extends React.Component {

  render() {

    return (

      <div className="addedToBagDialogue">
        <div className="top_arrow"></div>
        <div className="bagHeader">
          0 ITEMS IN BAG
        </div>
        <div className="innerAddedToBagDialogue">
          YOUR SHOPPING BAG IS EMPTY
        </div>
        <div className="bagFooter">
          <div className="total clearfix">
            <div className="left">Total</div>
            <div className="right">0,00 руб</div>
          </div>
          <a href="" className="view_edit_bag">
            view/edit bag
          </a>
          <a href="" className="checkout">
            checkout
          </a>

        </div>
      </div>

    );
  }
}

export default BagDialogue;