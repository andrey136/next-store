import React from "react";
import InputSearchBar from "./InputSearchBar";
import QuickLinks from "./QuickLinks";
import ShoppingBagIcon from "./ShoppingBagIcon";

class HeaderTopBar extends React.Component {

  render() {

    return (
      <section className="HeaderTopBar">
        <a href="" className="HeaderLogo">next</a>
        <div className="header-top-bar-container">

          <InputSearchBar/>
          <QuickLinks/>
          <ShoppingBagIcon change_shopping_bag_number={() => this.props.change_shopping_bag_number()} state={this.props.state}/>

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