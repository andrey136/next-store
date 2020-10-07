import React, {Component} from 'react';
import axios from 'axios';
import App from '../App.js'

// https://next-store-server.herokuapp.com
// http://localhost:5000

export const get_json_data = (loading) => {
  return axios.get('http://localhost:5000/next_store')
    .then(res => {
      return {json_data: res.data, loading: false, server_responds: true}
    }).catch(err => {
    if(loading){
      console.log('ERR');
      return {json_data: {}, loading: false, server_responds: false};
    }
  })
};

export const get_img = (loading) => {
  return axios.get('http://localhost:5000/get_image')
    .then(res => {
      console.log('SUCCESS-IMAGE');
      return res
    }).catch(err => {
      return "ERROR";
    })
};


// axios.get('http://localhost:5000/next_store')
//   .then(res => {
//     this.setState({json_data: res.data, loading: false, server_responds: true});
//     console.log("componentDidMount True");
//
// }).catch(err => {
//   if(this.state.loading){
//     this.setState({json_data: {}, loading: false, server_responds: false});
//     console.log('SERVER OFF\n', this.state);
//   }
// })