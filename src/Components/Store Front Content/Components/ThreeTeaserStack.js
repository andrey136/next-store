import React from "react";
// Components
import InnerTeaserCol from "./InnerTeaserCol";
// Pics
import kids from "../../../pics/kids-heritage-data.jpg";
import womens from "../../../pics/womens-hoodies---sweatshirts-data.jpg";
import mens from "../../../pics/mens-colour-blocking---stripes-data.jpg";

import boys from "../../../pics/boys-long-sleeve-tops-data.jpg";
import girls from "../../../pics/girls-long-sleeve-tops-data.jpg";
import newborns from "../../../pics/newborn-sets-data.jpg";

class ThreeTeaserStack extends React.Component {
  constructor(props) {
    super(props);
    this.inner_teasers={
      1 : [{entry: 'Timeless Styles', pic: kids}, {entry: 'Women\'s Hoodies', pic: womens}, {entry: 'Blocking & Stripes', pic: mens}],
      2 : [{entry: 'Boys\' Top' , pic: boys}, {entry: 'Girls\' Hoodies', pic: girls}, {entry: 'Newborn Sets', pic: newborns}]
    };
  }


  render() {
    return (
      <section className="carousel_inner_teasers">
        {this.inner_teasers[this.props.id].map(el => <InnerTeaserCol entry={el.entry} pic={el.pic}/>)}
      </section>
    );
  }
}

export default ThreeTeaserStack;