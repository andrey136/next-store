import React from "react";
import imagemap from '../../../pics/russia-mov-2tab-en-data.jpg'

class ImageMap extends React.Component {

  render() {

    return (
      <div className="imagemap_banner row">
        <a href="">
          <img src={imagemap} alt=""/>
        </a>
      </div>
    );
  }
}

export default ImageMap;