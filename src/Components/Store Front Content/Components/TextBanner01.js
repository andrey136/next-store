import React from "react";

class TextBanner01 extends React.Component {

  render() {

    return (
      <div className="text-banner__content">
        <div className="banner-text">
          <p><span>{this.props.json_data.txt}</span></p>
        </div>
      </div>
    );
  }
}

export default TextBanner01;