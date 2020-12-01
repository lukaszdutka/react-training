import React from 'react';
import Wrapper from "../common-components/Wrapper";
import Header from "../common-components/Header";
import SearchBar from "./SearchBar";
import youtube from './../../api/youtube.js';

class MyYoutube extends React.Component {

  state = {
    video: {},
    videos: []
  }

  onSearchSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: term
      }
    }).then(r => console.log(r));
  }

  render() {
    return (
      <Wrapper>
        <Header name={'My Youtube'}/>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
      </Wrapper>
    );
  }
}

export default MyYoutube;