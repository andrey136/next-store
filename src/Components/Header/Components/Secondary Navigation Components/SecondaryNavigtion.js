import React from 'react';
import './secondary_nav.css'

class SecondaryNavigation extends React.Component {

  render() {
    return (
      <div className="SecondaryNav">

        {Object.keys(this.props.sec_nav).includes(this.props.id) && <div className="DepartmentNav">
          {this.props.sec_nav[this.props.id].map(el =>
            <ul className="Component">
              {el.map(el => <div className="wrapper">
                {el['top_entry'] !== undefined &&
                <li className="ComponentItem topEntry"><a href="">{el.top_entry}</a></li>}
                <li className="ComponentItem Header">{el.header}</li>
                {
                  el.links.map(el =>
                    <li className="ComponentItem"><a href="">{el}</a></li>
                  )
                }
              </div>)}
            </ul>
          )}
        </div>}

      </div>);
  }
}

export default SecondaryNavigation;