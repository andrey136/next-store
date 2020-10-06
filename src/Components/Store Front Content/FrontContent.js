import React from "react";
// Components
import ThreeTeaserStack from "./Components/ThreeTeaserStack";
import Banner_Img from "./Components/Banner_Img";
import TextBanner01 from "./Components/TextBanner01";
import ProductCategory from "./Components/ProductCategory";
import ButtonList from "./Components/ButtonList"
import MoreServices from "./Components/MoreServices";

class FrontContent extends React.Component {

  render() {

    return (
      <div className="Background">
        <div id="DarkScreen" className={this.props.state.flag_active ? 'active' : ''}
             style={!this.props.state.fade ? {'display': 'none'} : {}}
             onClick={() => this.props.change_flag_active_status()}></div>
        <div id="divStoreFrontPage" className="StoreFrontPage">

          <TextBanner01 json_data={this.props.json_data.TextBanner01}/>
          <Banner_Img json_data={this.props.json_data.Banner_Img}/>
          <ThreeTeaserStack id="1" json_data={this.props.json_data.ThreeTeaserStack.stack_01}/>
          <ProductCategory json_data={this.props.json_data.ProductCategory}/>
          <ButtonList json_data={this.props.json_data.ButtonList}/>
          <ThreeTeaserStack id="2" json_data={this.props.json_data.ThreeTeaserStack.stack_02}/>
          <MoreServices json_data={this.props.json_data.ProductCategory}/>

        </div>
      </div>);
  }
}

export default FrontContent;