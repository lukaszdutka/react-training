import React from 'react';
import axios from 'axios';
import './UserInput.css'
import Wrapper from "../common-components/Wrapper";
import Header from "../common-components/Header";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import constants from "../../constants";

class UserInput extends React.Component {

  state = {
    images: []
  };

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID ' + constants["client-id"]
      }
    })
    this.setState({images: response.data.results})
  }

  render() {
    return (
      <Wrapper>
        <Header name={'UserInput'}/>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
        Found: {this.state.images.length} elements
      </Wrapper>
    );
  }
}

export default UserInput;