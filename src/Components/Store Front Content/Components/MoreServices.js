import React from "react";
import payment from '../../../pics/russia-delivery-charge-en-high.jpg';
import free_ship from '../../../pics/free-shipping-uk.jpg';
import easy_local_returns from '../../../pics/easy-local-returns-uk.jpg';
import customercare from '../../../pics/customercare-uk.jpg';

class MoreServices extends React.Component {

  render() {

    return (
      <div className="more-services-slider-module">
        <div className="module-logo"></div>
        <div className="more-ways-con">
          <div className="more-ways-title">Great Style, Great Service</div>
          <div className="more-ways-subtitle">Whether it’s free shipping, easy returns, or our flexible payment methods,
            we have options that might be right for you
          </div>
          <div className="more-ways-carousel">
            <div className="more-ways-car-con clearfix">

              <div className="more-ways-card-wrap" id="services12_01">
                <div className="more-ways-card-con">
                  <a href="" className="hp-hover-image-wrapper">
                    <div className="more-ways-card-img-con">
                      <img src={payment} alt=""/>
                    </div>
                    <div className="more-ways-card-title">
                      Flexible payment methods to suit your needs
                    </div>
                  </a>
                  <a href="" title="Find out more" className="hp-btn">Find out more</a>
                </div>
              </div>


              <div className="more-ways-card-wrap" id="services12_02">
                <div className="more-ways-card-con">
                  <a href="" className="hp-hover-image-wrapper">
                    <div className="more-ways-card-img-con">
                      <img src={free_ship} alt=""/>
                    </div>
                    <div className="more-ways-card-title">
                      Delivery speed varies by region, use our zip code checker to find out more
                    </div>
                  </a>
                  <a href="" title="Find out more" className="hp-btn">Find out more</a>
                </div>
              </div>


              <div className="more-ways-card-wrap" id="services12_03">
                <div className="more-ways-card-con">
                  <a href="" className="hp-hover-image-wrapper">
                    <div className="more-ways-card-img-con">
                      <img src={easy_local_returns} alt=""/>
                    </div>
                    <div className="more-ways-card-title">
                      You can return any unworn items within 28 days for a full refund
                    </div>
                  </a>
                  <a href="" title="Find out more" className="hp-btn">Find out more</a>
                </div>
              </div>


              <div className="more-ways-card-wrap" id="services12_04">
                <div className="more-ways-card-con">
                  <a href="" className="hp-hover-image-wrapper">
                    <div className="more-ways-card-img-con">
                      <img src={customercare} alt=""/>
                    </div>
                    <div className="more-ways-card-title">
                      24 hour customer service, our friendly advisors are waiting to assist you
                    </div>
                  </a>
                  <a href="" title="Find out more" className="hp-btn">Find out more</a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoreServices;