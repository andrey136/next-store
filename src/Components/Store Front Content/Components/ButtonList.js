import React from "react";

class buttonList extends React.Component {

  listOfButtons = ['Shop Womens', 'Shop Mens', 'Shop Girls', 'Shop Boys', 'Shop Baby', 'Shop Home'];

  render() {

    return (
      <div className="button-list">
        <div className="button-list-title">Shop by department</div>
        <div className="button-list-container">
          {this.listOfButtons.map(el => <a href="">{el}</a>)}
        </div>
      </div>
    );
  }
}

export default buttonList;