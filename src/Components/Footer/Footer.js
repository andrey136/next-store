import React from "react";
import './footer.css';
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
        <section class="FooterLinks Content">
          <div className="Inner clearfix">


            <section className="LinkSection">
              <div className="Title">Help</div>
              <ul className="LinkList">
                <li className="Item">
                  <a href="">
                    <span>My account</span>
                  </a>
                </li>

                <li className="Item">
                  <a href="">
                    <span>Returns Information</span>
                  </a>
                </li>

                <li className="Item">
                  <a href="">
                    <span>Shipping Information</span>
                  </a>
                </li>

                <li className="Item">
                  <a href="">
                    <span>Contact Us</span>
                  </a>
                </li>

                <li className="Item">
                  <a href="">
                    <span>Sitemap</span>
                  </a>
                </li>
              </ul>
            </section>

            <section className="LinkSection">
              <div className="Title">Privacy & Legal</div>
              <ul className="LinkList">
                <li className="Item">
                  <a href="">
                    <span>Privacy Policy</span>
                  </a>
                </li>

                <li className="Item">
                  <a href="">
                    <span>Terms & Conditions</span>
                  </a>
                </li>
              </ul>
            </section>

            <section className="LinkSection">
              <div className="Title">Other services</div>
              <ul className="LinkList">
                <li className="Item">
                  <a href="">
                    <span>Next Mobile</span>
                  </a>
                </li>

                <li className="Item">
                  <a href="">
                    <span>Media & Press</span>
                  </a>
                </li>

                <li className="Item">
                  <a href="">
                    <span>The Company</span>
                  </a>
                </li>

                <li className="Item">
                  <a href="">
                    <span>Careers@next</span>
                  </a>
                </li>

                <li className="Item">
                  <a href="">
                    <span>Next Franchise Next Affiliates</span>
                  </a>
                </li>

                <li className="Item">
                  <a href="">
                    <span>Next Affiliates</span>
                  </a>
                </li>
              </ul>
            </section>


          </div>
        </section>
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