import React from 'react';
import './secondary_nav.css'

class SecondaryNavigation extends React.Component {

  components = [
    [
      {
        header: "Shop Womens",
        links : ["Shop All", "Dresses", "Jumpers & Cardigans", "Shorts, Skirts & Trousers", "Tops & T-Shirts", "Swim & Beachwear", "Footwear"]
      }
    ],
    [
      {
        header : "Shop Mens",
        links : ["Shop All", "Coats & Jackets", "Jeans", "Trousers & Chinos", "T-Shirts & Polos", "Shorts & Swimwear", "Shoes"]
      },
      {
        header: "Shop Home",
        links: ["Shop All"]
      }
    ],
    [
      {
        header: "Shop Mens",
        links: ["Shop All", "Dresses & Skirts", "Coats & Jackets", "Tops, T-shirts & Shirts", "Shoes & Sandals"]
      },
      {
        header: 'Shop Boys',
        links: ["Shop All", "Shirts", "Shorts", "Sweatshirts & Hoodies", "Tops, T-shirts & Polos", "Shoes"]
      }
    ]
  ];

  render() {
    return (
      <div className="SecondaryNav">
        {/*<div className="ComponentContainer"></div>*/}
        {this.props.id === 'sale' && <div className="DepartmentNav">
          {this.components.map(el =>
            <ul className="Component">
              {el.map(el => <div className="wrapper">
                <li className="ComponentItem Header">{el.header}</li>{
                el.links.map(el =>
                  <li className="ComponentItem"><a href="">{el}</a></li>
                )
              }
              </div>)}
            </ul>
          )}

        </div>}
        {/*{this.props.id === 'baby' && <div className="DepartmentNav"></div>}*/}
        {/*{this.props.id === 'girls' && <div className="DepartmentNav">Happy Easter</div>}*/}
        {/*{this.props.id === 'boys' && <div className="DepartmentNav">Happy 4th of July</div>}*/}
        {/*{this.props.id === 'nightwear' && <div className="DepartmentNav">Happy Valentine's Day</div>}*/}
        {/*{this.props.id === 'women' && <div className="DepartmentNav">Happy Halloween</div>}*/}
        {/*{this.props.id === 'men' && <div className="DepartmentNav">Happy Thanksgiving Day</div>}*/}
        {/*{this.props.id === 'shoes' && <div className="DepartmentNav">Happy Friendship Day</div>}*/}
        {/*{this.props.id === 'home' && <div className="DepartmentNav">Happy Laughter Day</div>}*/}

      </div>);
  }
}

export default SecondaryNavigation;