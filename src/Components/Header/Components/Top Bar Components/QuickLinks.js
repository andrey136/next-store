import React from "react";

class QuickLinks extends React.Component {

  quick_links = this.props.json_data;

  render() {

    return (<div className="QuickLinks">
            <ul>
              {this.quick_links.map((el,ind) => ind == this.quick_links.length ? <li><a href="">{el}</a></li> : <li id="top-header-phone-number"><a href="">{el}</a></li>)}
            </ul>
          </div>
    );
  }
}

export default QuickLinks;