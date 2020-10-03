import React from 'react';
//Modules
import Header from "./Components/Header/Header";
import FrontContent from "./Components/Store Front Content/FrontContent";


class App extends React.Component {

  constructor(props) {
    super(props);

    this.nav = ['sale', 'baby', 'girls', 'boys', 'nightwear', 'women', 'men', 'shoes', 'home'];

    this.state = {
      fade: false,
      flag_active: false,
      shopping_bag_number: 0
    }
  }

  change_flag_active_status(){
    if(this.state.fade){
      this.setState({flag_active: !this.state.flag_active});
      setTimeout(() => {this.setState({fade: !this.state.fade})}, 1000)
    } else {
      this.setState({fade: !this.state.fade});
      setTimeout(() => {this.setState({flag_active: !this.state.flag_active})}, 10)
    }
  }

  change_shopping_bag_number(){
    let num = this.state.shopping_bag_number;
    num < 10 ? ++num : num = 0;
    this.setState({shopping_bag_number: num});
  }

  render() {

    return (
      <div className="App">

        <Header nav={this.nav} state={this.state} change_flag_active_status={() => this.change_flag_active_status()} change_shopping_bag_number={() => this.change_shopping_bag_number()}/>

        <FrontContent state={this.state} change_flag_active_status={() => this.change_flag_active_status()}/>

      </div>
    );
  }
}

export default App;
