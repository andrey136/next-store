import React from "react";

class ImageMap extends React.Component {

  render() {
    return (
      <div className="imagemap_banner row">
        <a href="">
          <img src={`${this.props.server_address}/next_store/get_image?img_name=${this.props.json_data.img}`} alt=""/>
        </a>
      </div>
    );
  }
}

export default ImageMap;