import React from "react";
import './footer.css';
// Modules
import FooterLinksContent from "./Footer Components/FooterLinksContent";
import FooterBottomBar from "./Footer Components/FooterBottomBar";

class Footer extends React.Component {

  render() {

    return (
      <footer class="PageFooter HomeFooter">
        <FooterLinksContent json_data={this.props.json_data.FooterLinksContent}/>
        <FooterBottomBar server_address={this.props.server_address} json_data={this.props.json_data.FooterBottomBar}/>
      </footer>);
  }
}

export default Footer;