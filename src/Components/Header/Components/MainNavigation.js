import React from "react";
import SecondaryNavigation from "./Secondary Navigation Components/SecondaryNavigtion";

class MainNavigation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      id: null
    }
  }

  onMouseEnterHandler(el){
    this.setState({hover: true, id: el});
  }

  onMouseLeaveHandler(){
    this.setState({hover: false, id: null});
  }

  render() {
    return (
      <nav id="MainNavigation">
        <ul>
          {this.props.nav.map(el =>
            <li className="MegaNavDepartment" id={el} key={this.props.nav.indexOf(el)} onMouseEnter={() => this.onMouseEnterHandler(el)} onMouseLeave={() => this.onMouseLeaveHandler()}>{el.toUpperCase()}
              {this.state.hover && el === this.state.id && <SecondaryNavigation id={el} />}
            </li>
          )}
        </ul>
      </nav>);
  }
}

export default MainNavigation;