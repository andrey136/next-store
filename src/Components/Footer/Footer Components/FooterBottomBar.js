import React from "react";
import '../footer.css';

class FooterBottomBar extends React.Component {

  render() {

    return (<section className="footerBottomBar Content">
        <div className="InnerFooter clearfix">
          <section className="Copyright">{this.props.json_data.Copyright}</section>
          <ul className="LinkList">
            {this.props.json_data.img.map(img => <li className="Item"><a href=""><img src="" alt=""/><img
              src={`${this.props.server_address}/next_store/get_image?img_name=${img}`} alt=""/></a></li>)}
          </ul>
        </div>
      </section>
    );
  }
}

export default FooterBottomBar;