import React from 'react';
import './UserInput.css'
import Wrapper from "../common-components/Wrapper";
import Header from "../common-components/Header";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class UserInput extends React.Component {

  onSearchSubmit = (term) => {

  }

  render() {
    return (
      <Wrapper>
        <Header name={'UserInput'}/>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList/>
      </Wrapper>
    );
  }
}

export default UserInput;