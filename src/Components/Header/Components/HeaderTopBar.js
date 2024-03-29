import React from "react";
import InputSearchBar from "./Top Bar Components/InputSearchBar";
import QuickLinks from "./Top Bar Components/QuickLinks";
import ShoppingBagIcon from "./Top Bar Components/ShoppingBagIcon";
import CheckoutButton from "./Top Bar Components/CheckoutButton";
import FlagIcon from "./Top Bar Components/FlagIcon";
import BagDialogue from "./Top Bar Components/BagDialogue";

class HeaderTopBar extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      show_bag_dialogue: false
    }
  }

  change_show_bag_dialogue(){
    this.setState({show_bag_dialogue: !this.state.show_bag_dialogue})
  }

  render() {

    return (
      <section className="HeaderTopBar">
        <a href="" className="HeaderLogo">{this.props.json_data.logo}</a>
        <div className="header-top-bar-container">
          <InputSearchBar json_data={this.props.json_data.inputSearchBox}/>
          <QuickLinks json_data={this.props.json_data.quickLinks}/>
          <ShoppingBagIcon change_shopping_bag_number={() => this.props.change_shopping_bag_number()} state={this.props.state} json_data={this.props.json_data.shoppingBag} change_show_bag_dialogue={() => this.change_show_bag_dialogue()}/>
          {this.state.show_bag_dialogue && <BagDialogue style={{"display" : "none"}}/>}
          <CheckoutButton json_data={this.props.json_data.checkoutButton}/>
          <FlagIcon change_flag_active_status={() => this.props.change_flag_active_status()} state={this.props.state} json_data={this.props.json_data.flagIcon}/>
        </div>
      </section>
    );
  }
}

export default HeaderTopBar;