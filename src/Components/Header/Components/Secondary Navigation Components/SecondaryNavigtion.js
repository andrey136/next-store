import React from 'react';
import './secondary_nav.css'

class SecondaryNavigation extends React.Component {

  components_sale = [
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

  components_baby = [
    [
      {
        header: "Girls Clothing",
        links : ["Bodysuits", "Coats, Jackets & Pramsuits", "Dresses", "Hats & Scratch Mitts", "Knitwear & Jumpers", "Rompersuits & Dungarees", "Sets", "Sleepsuits", "Socks & Tights", "Tops", "Trousers & Leggings", "Shop All"]
      }
    ],
    [
      {
        header : "Boys Clothing",
        links : ["Bodysuits", "Coats, Jackets & Pramsuits", "Hats & Scratch Mitts", "Knitwear & Jumpers", "Rompersuits & Dungarees", "Sets", "Sleepsuits", "Socks", "Tops", "Trousers & Leggings", "Shop All"]
      }
    ],
    [
      {
        header: "Collections",
        links: ["Maternity Clothing", "Organic Baby", "Unisex"]
      }
    ]
  ];

  components_girls = [
    [
      {
        header: "Clothing",
        links : ["Dresses", "Jackets & Coats", "Jeans", "Jumpsuits & Playsuits", "Knitwear", "Nightwear & Pyjamas", "Schoolwear", "Sets & Outfits", "Shorts & Skirts", "Sportswear"]
      }
    ],
    [
      {
        header : "⠀",
        links : ["Sweatshirts & Hoodies", "Swim & Beach", "Tops, T-Shirts & Shirts", "Trousers & Leggings"]
      },
      {
        header: "SHOES & ACCESSORIES",
        links: ["Bags & Accessories", "Hats, Gloves & Scarves", "Shoes, Trainers & Boots", "Socks & Tights", "Underwear"]
      }
    ],
    [
      {
        header: "SHOP BY AGE",
        links: ["0-2 yrs", "3-5 yrs", "6-9 yrs", "10-16 yrs"]
      },
      {
        header: "SHOP BY RANGE",
        links: ["Baby Girls 0mths-2yrs", "Younger Girls 3mths-7yrs", "Older Girls 3yrs-16yrs"]
      },
      {
        header: "TRENDING",
        links: ["Sports", "Matching Family"]
      }
    ]
  ];

  components_boys = [
    [
      {
        header: "Clothing",
        links : ["Jackets & Coats", "Jeans", "Joggers", "Knitwear", "Nightwear & Pyjamas", "Schoolwear", "Sets & Outfits", "Shirts", "Shorts", "Sportswear"]
      }
    ],
    [
      {
        header : "⠀",
        links : ["Suits & Waistcoats", "Sweatshirts & Hoodies", "Swim & Beach", "Tops, T-Shirts & Polos", "Trousers & Chinos"]
      },
      {
        header: "ACCESSORIES",
        links: ["Bags & Accessories", "Hats, Gloves & Scarves", "Shoes, Trainers & Boots", "Socks", "Underwear"]
      }
    ],
    [
      {
        header: "SHOP BY AGE",
        links: ["0-2 yrs", "3-5 yrs", "6-9 yrs", "10-16 yrs"]
      },
      {
        header: "SHOP BY RANGE",
        links: ["Baby Girls 0mths-2yrs", "Younger Girls 3mths-7yrs", "Older Girls 3yrs-16yrs"]
      },
      {
        header: "TRENDING",
        links: ["Sports", "Matching Family", "Heritage"]
      }
    ]
  ];

  components_nightwear = [
    [
      {
        header: "Girls",
        links : ["All Nightwear", "Pyjamas", "Underwear", "Socks"]
      },
      {
        header: "Boys",
        links : ["All Nightwear", "Pyjamas", "Underwear", "Socks"]
      }
    ],
    [
      {
        header : "Womens",
        links : ["All Nightwear & Lounge", "Dressing Gowns", "Pyjamas", "Slips & Camis", "Lingerie Shop", "Knickers", "Bras", "D+", "Maternity Bras", "Socks & Tights"]
      },
      {
        header: "Baby",
        links: ["Sleepsuits", "Body Suits"]
      }
    ],
    [
      {
        header: "Mens",
        links: ["All Nightwear & Lounge", "Nightwear", "Loungewear", "Robes", "All Underwear", "Socks"]
      }
    ]
  ];

  components_womens = [
    [
      {
        header: "Clothing",
        links : ["New In", "Coats & Jackets", "Dresses", "Hoodies & Sweatshirts", "Jeans", "Jumpers & Cardigans", "Shirts & Blouses", "Shorts & Skirts", "Sportswear & Joggers", "Suits & Workwear", "Swim & Beachwear", "Tops & T-Shirts", "Trousers & Leggings", "Jumpsuits & Playsuits"]
      }
    ],
    [
      {
        header : "Shoes",
        links : ["Boots", "Flats", "Heels", "Sandals", "Trainers", "Wedges"]
      },
      {
        header: "⠀",
        links: ["All Accessories", "Bags & Purses", "Hats, Gloves & Scarves"]
      }
    ],
    [
      {
        header: "LINGERIE & NIGHTWEAR",
        links: ["All Lingerie", "All Nightwear & Lounge", "Socks & Tights"]
      },
      {
        header: "SHOP BY RANGE",
        links: ["Petite", "Tall", "Curve", "Maternity"]
      },
      {
        header: "Trending",
        links: ["Loungewear", "Autumnal Layering"]
      }
    ]
  ];

  components_mens = [
    [
      {
        header: "Clothing",
        links : ["New In", "Blazers & Formal Jackets", "Coats & Jackets", "Jeans", "Joggers", "Knitwear", "Shorts & Swimwear", "Sportswear", "Suits", "Sweatshirts & Hoodies", "Trousers & Chinos", "T-Shirts & Polos"]
      }
    ],
    [
      {
        header : "Underwear/Nightwear",
        links : ["Socks", "Underwear"]
      },
      {
        header: "ACCESSORIES",
        links: ["All Accessories", "Bags & Luggage"]
      }
    ],
    [
      {
        header: "Footwear",
        links: ["All Footwear", "Boots", "Shoes", "Sandals & Sliders", "Trainers & Pumps"]
      },
      {
        header: "Trending",
        links: ["Big & Tall", "Matching Family", "Multipack", "Autumnal Layering"]
      }
    ]
  ];

  components_shoes = [
    [
      {
        header: "WOMENS - BY STYLE",
        links : ["New In", "Boots", "Flats", "Heels", "Sandals & Wedges", "Slippers", "Trainers", "All Footwear"]
      },
      {
        header: "WOMENS - BY RANGE",
        links : ["Boots", "Occasion Shoes", "Adidas"]
      }
    ],
    [
      {
        header: "MENS - BY STYLE",
        links : ["Boots", "Sandals & Sliders", "Shoes", "Slippers", "Trainers", "All Footwear"]
      },
      {
        header: "MENS - BY RANGE",
        links : ["Formal Shoes", "Casual Shoes", "Boots", "Adidas"]
      }
    ],
    [
      {
        header: "Girls",
        links: ["New In", "Boots & Wellies", "School Shoes", "Trainers & Pumps", "All Girls Shoes"]
      },
      {
        header: "Boys",
        links: ["New In", "Boots & Wellies", "School Shoes", "Trainers & Pumps", "All Boys Shoes"]
      }
    ]
  ];

  components_home = [
    [
      {
        header: "BEDROOM & BEDDING",
        links : ["All Bedding", "Bedsets & Duvet Covers", "Bed Sheets & Pillow Cases", "Childrens Bedding", "Cushions", "Throws", "Nursery Bedding"]
      },
      {
        header: "BATHROOM",
        links : ["Boots", "Occasion Shoes", "Adidas", "Mirrors"]
      }
    ],
    [
      {
        header: "HOME ACCESSORIES",
        links : ["Shop All", "Canvases & Wall Art", "Mirrors", "Photo Frames", "Ornaments", "Candle Holders & Lanterns", "Vases"]
      },
      {
        header: "HOME FURNISHINGS",
        links : ["Throws"]
      }
    ]
  ];

  render() {
    return (
      <div className="SecondaryNav">
        {/*<div className="ComponentContainer"></div>*/}
        {this.props.id === 'sale' && <div className="DepartmentNav">
          {this.components_sale.map(el =>
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

        {this.props.id === 'baby' && <div className="DepartmentNav">
          {this.components_baby.map(el =>
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

        {this.props.id === 'girls' && <div className="DepartmentNav">
          {this.components_girls.map(el =>
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


        {this.props.id === 'boys' && <div className="DepartmentNav">
          {this.components_boys.map(el =>
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

        {this.props.id === 'nightwear' && <div className="DepartmentNav">
          {this.components_nightwear.map(el =>
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

        {this.props.id === 'women' && <div className="DepartmentNav">
          {this.components_womens.map(el =>
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

        {this.props.id === 'men' && <div className="DepartmentNav">
          {this.components_mens.map(el =>
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

        {this.props.id === 'shoes' && <div className="DepartmentNav">
          {this.components_shoes.map(el =>
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

        {this.props.id === 'home' && <div className="DepartmentNav">
          {this.components_home.map(el =>
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

      </div>);
  }
}

export default SecondaryNavigation;