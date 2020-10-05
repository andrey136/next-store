import React from "react";
// Components
import InnerTeaserCol from "./InnerTeaserCol";

class ThreeTeaserStack extends React.Component {

  render() {
    return (
      <section className="carousel_inner_teasers">
        {this.props.json_data.txt.map((el, i) => <InnerTeaserCol entry={this.props.json_data.txt[i]} pic={`http://localhost:5000/next_store/get_image?img_name=${this.props.json_data.img[i]}`}/>)}
      </section>
    );
  }
}

export default ThreeTeaserStack;