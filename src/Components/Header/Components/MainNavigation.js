import React from "react";

class MainNavigation extends React.Component {

  render() {
    return (
      <nav id="MainNavigation">
        <ul>
          {this.props.nav.map(el => <li id={el} key={this.props.nav.indexOf(el)}>{el.toUpperCase()}</li>)}
        </ul>
      </nav>);
  }
}

export default MainNavigation;