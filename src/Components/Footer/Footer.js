import React from "react";
import './footer.css';
// Modules
import FooterLinksContent from "./Footer Components/FooterLinksContent";
// Pics
import vk from '../../pics/vk.png';
import twitter from '../../pics/twitter.png';
import facebook from '../../pics/facebook.png';
import youtube from '../../pics/youtube.png';
import pinterest from '../../pics/pinterest.png';
import instagram from '../../pics/instagram.png'

class Footer extends React.Component {

  render() {

    return (
      <footer class="PageFooter HomeFooter">
        <FooterLinksContent/>
        <section className="footerBottomBar Content">
          <div className="InnerFooter clearfix">
            <section className="Copyright"> © 2020 Next LLC. All Rights Reserved.</section>
            <ul className="LinkList">
              <li className="Item"><a href=""><img src="" alt=""/><img src={vk} alt=""/></a></li>
              <li className="Item"><a href=""><img src="" alt=""/><img src={facebook} alt=""/></a></li>
              <li className="Item"><a href=""><img src="" alt=""/><img src={twitter} alt=""/></a></li>
              <li className="Item"><a href=""><img src="" alt=""/><img src={instagram} alt=""/></a></li>
              <li className="Item"><a href=""><img src="" alt=""/><img src={pinterest} alt=""/></a></li>
              <li className="Item"><a href=""><img src="" alt=""/><img src={youtube} alt=""/></a></li>
            </ul>
          </div>
        </section>
      </footer>);
  }
}

export default Footer;