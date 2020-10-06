import React from "react";
import '../footer.css';

class FooterLinksContent extends React.Component {

  links = {
    ul_1: {
      title: 'Help',
      links: ["My account", "Returns Information", "Shipping Information", "Contact Us", "Sitemap"]
    },
    ul_2: {
      title: 'Privacy & Legal',
      links: ["Privacy Policy", "Terms & Conditions"]
    },
    ul_3: {
      title: 'Other Services',
      links: ["Next Mobile", "Media & Press", "The Company", "Careers@next", "Next Franchise Next Affiliates", "Next Affiliates"]
    },
  };

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