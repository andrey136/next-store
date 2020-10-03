import React from "react";
import InputSearchBar from "./InputSearchBar";
import QuickLinks from "./QuickLinks";

class HeaderTopBar extends React.Component {

  render() {

    return (
      <section className="HeaderTopBar">
        <a href="" className="HeaderLogo">next</a>
        <div className="header-top-bar-container">
          <InputSearchBar/>
          <QuickLinks/>
          <div className="BagSummary MiniBagNonSecure">
            <a data-link-id="01-07" data-link-name="Shopping Bag"
               rel="nofollow">
              <div className="Icon" onClick={() => this.props.change_shopping_bag_number()}>
                <span>{this.props.state.shopping_bag_number}</span>
              </div>
              <div className="BagTextClipping  nextDisplayNone">
                <div id="bagtext" className="BagSummaryText">0.00 руб</div>
              </div>
            </a>
          </div>
          <div className="Checkout">
            <a className="nxbtn primary disabled" data-link-id="01-08" data-link-name="Checkout"
               rel="nofollow">Checkout</a>
          </div>
          <div className={this.props.state.flag_active ? "flagContainer active" : "flagContainer"}
               onClick={() => this.props.change_flag_active_status()}>
            <div className="HeaderFlag flag-Russia"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeaderTopBar;