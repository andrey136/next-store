import React from "react";
import './footer.css'

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

        </section>
      </footer>);
  }
}

export default Footer;