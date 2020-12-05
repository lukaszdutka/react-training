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

  componentDidMount() {
    this.onSearchSubmit('buildings');
  }

  onSearchSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: term
      }
    }).then(r => this.setState({
      videos: r.data.items,
      selectedVideo: r.data.items[0]
    }));
  }

  onVideoSelected = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    return (
      <Wrapper>
        <Header name={'My Youtube'}/>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelected={this.onVideoSelected}/>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default MyYoutube;