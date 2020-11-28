import React from 'react';
import unsplash from '../../api/unsplash'
import './UserInput.css'
import Wrapper from "../common-components/Wrapper";
import Header from "../common-components/Header";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class UserInput extends React.Component {

  state = {
    images: []
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {query: term}
    })
    this.setState({images: response.data.results})
  }

  render() {
    return (
      <Wrapper>
        <Header name={'UserInput'}/>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </Wrapper>
    );
  }
}

export default UserInput;