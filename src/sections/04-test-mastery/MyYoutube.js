import React from 'react';
import Wrapper from "../common-components/Wrapper";
import Header from "../common-components/Header";
import SearchBar from "./SearchBar";
import youtube from './../../api/youtube.js';
import VideoList from "./VideoList";

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
    })
      //.then(r => console.log(r));
      .then(r => this.setState({videos: r.data.items}));
  }

  render() {
    return (
      <Wrapper>
        <Header name={'My Youtube'}/>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        <VideoList videos={this.state.videos}/>
      </Wrapper>
    );
  }
}

export default MyYoutube;