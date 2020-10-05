import React from "react";
//Pics
import boys_jeans from '../../../pics/boys--jeans-data.jpg'
import girls_jeans from "../../../pics/girls--jeans-data.jpg";
import newborn_knitwear from "../../../pics/newborn-knitwear-data.jpg";
import women_long_skirts from "../../../pics/women-s-long-skirts-data.jpg";
import mens_joggers from "../../../pics/men-s-joggers-data.jpg";
import adidas_kids from "../../../pics/adidas-kids-data.jpg";
import children_nightwear from "../../../pics/children-s-nightwear-data.jpg";
import bedding from "../../../pics/bedding-data.jpg";


class ProductCategory extends React.Component {

  cats = [{entry: 'Boys\' Jeans', pic: boys_jeans},
    {entry: 'Girls\' Jeans', pic: girls_jeans},
    {entry: 'Newborn Knitwear', pic: newborn_knitwear},
    {entry: 'Women\'s Long Skirts', pic: women_long_skirts},
    {entry: 'Men\'s Joggers', pic: mens_joggers},
    {entry: 'Adidas Kids', pic: adidas_kids},
    {entry: 'Children\'s Nightwear', pic: children_nightwear},
    {entry: 'Bedding', pic: bedding}
  ];

  render() {

    return (
      <div className="product-category-slider-module">
        <div className="module-product-title">Shop by Category</div>
        <div className="carousel_outer_product">
          {this.cats.map(el =>
            <div className="carousel_inner_product">
              <a href="">
                <img src={el.pic} alt=""/>
                <div className="product-card-title">{el.entry}</div>
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProductCategory;