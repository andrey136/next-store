import React from "react";

class MoreServices extends React.Component {

  render() {
    return (
      <div className="more-services-slider-module">
        <div className="module-logo"></div>
        <div className="more-ways-con">
          <div className="more-ways-title">{this.props.json_data.title}</div>
          <div className="more-ways-subtitle">{this.props.json_data.subtitle}</div>
          <div className="more-ways-carousel">
            <div className="more-ways-car-con clearfix">

              {this.props.json_data["more-ways-cards"].map(el =>
                <div className="more-ways-card-wrap" id={el.id}>
                  <div className="more-ways-card-con">
                    <a href="" className="hp-hover-image-wrapper">
                      <div className="more-ways-card-img-con">
                        <img src={`${this.props.server_address}/next_store/get_image?img_name=${el.img}`} alt=""/>
                      </div>
                      <div className="more-ways-card-title">
                        {el.title}
                      </div>
                    </a>
                    <a href="" title="Find out more" className="hp-btn">{this.props.json_data["hp-btn"]}</a>
                  </div>
                </div>)}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoreServices;