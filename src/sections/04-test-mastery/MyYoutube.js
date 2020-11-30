import React from 'react';
import Wrapper from "../common-components/Wrapper";
import Header from "../common-components/Header";
import SearchBar from "./SearchBar";

class MyYoutube extends React.Component {

  state = {
    video: {},
    videos: []
  }

  onSearchSubmit = (term) => {
    console.log(term);
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