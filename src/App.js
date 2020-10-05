import React from 'react';
//Modules
import Header from "./Components/Header/Header";
import FrontContent from "./Components/Store Front Content/FrontContent";
import axios from "axios";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.nav = ['sale', 'baby', 'girls', 'boys', 'nightwear', 'women', 'men', 'shoes', 'home'];

    this.state = {
      server_responds: false,
      loading: true,
      fade: false,
      flag_active: false,
      shopping_bag_number: 0,
      json_data: {}
    }
  }

  componentDidMount() {
    console.log('componentDidMount\n', this.state);

    axios.get('http://localhost:5000/next_store')
      .then(res => {
        this.setState({json_data: res.data, loading: false, server_responds: true});
        console.log("componentDidMount True");

    }).catch(err => {
      if(this.state.loading){
        this.setState({json_data: {}, loading: false, server_responds: false});
        console.log('SERVER OFF\n', this.state);
      }
    })
  }

  change_flag_active_status(){
    console.log(this.state);
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
    console.log('render \n', this.state)
    return (
      <div className="App">
      {!this.state.loading && this.state.server_responds ?
      <div>
        <Header json_data={this.state.json_data.pages.Components.Header} state={this.state} change_flag_active_status={() => this.change_flag_active_status()} change_shopping_bag_number={() => this.change_shopping_bag_number()}/>
        <FrontContent state={this.state} change_flag_active_status={() => this.change_flag_active_status()}/>
      </div>
    : !this.state.loading && !this.state.server_responds ? <p>Server doesn't respond now. Try again later!</p> : <p></p>}
      </div>

    );
  }
}

export default App;
