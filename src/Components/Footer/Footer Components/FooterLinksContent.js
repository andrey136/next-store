import React from "react";
import '../footer.css';

class FooterLinksContent extends React.Component {

  links = this.props.json_data;

  render() {

    return (
      <section class="FooterLinks Content">
        <div className="Inner clearfix">

          {Object.keys(this.links).map(key =>
            <section className="LinkSection">
              <div className="Title">{this.links[key].title}</div>
              <ul className="LinkList">
                {this.links[key].links.map(el =>
                  <li className="Item">
                      <a href="">
                        <span>{el}</span>
                      </a>
                  </li>
                )}
              </ul>
            </section>
          )}

        </div>
      </section>
    );
  }
}

export default FooterLinksContent;