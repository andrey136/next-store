import React from "react";

class buttonList extends React.Component {

  render() {
    return (
      <div className="button-list">
        <div className="button-list-title">Shop by department</div>
        <div className="button-list-container">
          {this.props.json_data.txt.map(el => <a href="">{el}</a>)}
        </div>
      </div>
    );
  }
}

export default buttonList;