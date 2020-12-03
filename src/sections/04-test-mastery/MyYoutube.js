import React from 'react';
import Wrapper from "../common-components/Wrapper";
import Header from "../common-components/Header";
import SearchBar from "./SearchBar";
import youtube from './../../api/youtube.js';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class MyYoutube extends React.Component {

  state = {
    selectedVideo: null,
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

  onVideoSelected = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    return (
      <Wrapper>
        <Header name={'My Youtube'}/>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelected={this.onVideoSelected}/>
      </Wrapper>
    );
  }
}

export default MyYoutube;