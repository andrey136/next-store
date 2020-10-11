import React from 'react';
//Modules
import Header from "./Components/Header/Header";
import FrontContent from "./Components/Store Front Content/FrontContent";
import Footer from "./Components/Footer/Footer";
import {get_json_data} from './API/axios.js'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.nav = ['sale', 'baby', 'girls', 'boys', 'nightwear', 'women', 'men', 'shoes', 'home'];

    this.state = {
      server_address: 'https://next-store-server.herokuapp.com',
      server_responds: false,
      loading: true,
      fade: false,
      flag_active: false,
      shopping_bag_number: 0,
      json_data: {}
    }
  }

  componentDidMount() {
    get_json_data(this.state.loading, this.state.server_address).then((res) => res !== undefined && this.setState(res));
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
      {!this.state.loading && this.state.server_responds ?
      <div>
        <Header json_data={this.state.json_data.pages.Components.Header} state={this.state} change_flag_active_status={() => this.change_flag_active_status()} change_shopping_bag_number={() => this.change_shopping_bag_number()}/>
        <FrontContent server_address={this.state.server_address} json_data={this.state.json_data.pages.Components.FrontContent} state={this.state} change_flag_active_status={() => this.change_flag_active_status()}/>
        <Footer server_address={this.state.server_address} json_data={this.state.json_data.pages.Components.Footer}/>
      </div>
    : !this.state.loading && !this.state.server_responds ? <p>Server doesn't respond now. Try again later!</p> : <p></p>}
      </div>

    );
  }
}

export default App;
