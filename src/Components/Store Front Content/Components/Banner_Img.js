import React from "react";
// Components
// Pics
import banner from "../../../pics/50-hp-banner-salenowon-ru-data.jpg";

class Banner_Img extends React.Component {

  render() {

    return (
      <div className="imagemap_banner">
        <a href="">
          <img src={banner} alt=""/>
        </a>
      </div>
    );
  }
}

export default Banner_Img;