import React from "react";

class Banner_Img extends React.Component {

  render() {
    return (
      <div className="imagemap_banner">
        <a href="">
          <img src={`${this.props.server_address}/next_store/get_image?img_name=${this.props.json_data.img_name}`}
               alt=""/>
        </a>
      </div>
    );
  }
}

export default Banner_Img;