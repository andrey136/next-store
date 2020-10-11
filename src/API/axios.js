import React, {Component} from 'react';
import axios from 'axios';

// https://next-store-server.herokuapp.com
// http://localhost:5000

export const get_json_data = (loading, server_address) => {
  return axios.get(server_address + '/next_store')
    .then(res => {
      return {json_data: res.data, loading: false, server_responds: true}
    }).catch(err => {
    if(loading){
      return {json_data: {}, loading: false, server_responds: false};
    }
  })
};