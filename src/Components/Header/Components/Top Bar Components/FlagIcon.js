import React from "react";

class FlagIcon extends React.Component {

  render() {

    return (
      <div className={this.props.state.flag_active ? "flagContainer active" : "flagContainer"}
           onClick={() => this.props.change_flag_active_status()}>
        <div className="HeaderFlag flag-Russia"></div>
      </div>

    );
  }
}

export default FlagIcon;