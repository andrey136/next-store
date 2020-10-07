import React from "react";

class ProductCategory extends React.Component {

  render() {

    return (
      <div className="product-category-slider-module">
        <div className="module-product-title">{this.props.json_data.categories.category_product_title}</div>
        <div className="carousel_outer_product">
          {this.props.json_data.categories.txt.map((el, i) =>
            <div className="carousel_inner_product">
              <a href="">
                <img src={`${this.props.server_address}/next_store/get_image?img_name=${this.props.json_data.categories.img[i]}`} alt=""/>
                <div className="product-card-title">{this.props.json_data.categories.txt[i]}</div>
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProductCategory;