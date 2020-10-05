import React from "react";

class Banner_Img extends React.Component {

  render() {
    return (
      <div className="imagemap_banner">
        <a href="">
          <img src={`http://localhost:5000/next_store/get_image?img_name=50-hp-banner-salenowon-ru-data.jpg`} alt=""/>
        </a>
      </div>
    );
  }
}

export default Banner_Img;