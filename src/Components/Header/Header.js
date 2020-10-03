import React from "react";
// Modules
import MainNavigation from "./Components/MainNavigation";
import HeaderTopBar from "./Components/HeaderTopBar";

class Header extends React.Component {

  render() {

    return (
      <header>
        <HeaderTopBar change_shopping_bag_number={() => this.props.change_shopping_bag_number()}
                      state={this.props.state}
                      change_flag_active_status={() => this.props.change_flag_active_status()}/>
        <MainNavigation nav={this.props.nav}/>
      </header>);
  }
}

export default Header;