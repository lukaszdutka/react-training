import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  state = {
    searchTerm: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.searchTerm);
  }

  render() {
    return (
      <div className={'search-bar ui segment'}>
        <form onSubmit={this.onSubmit} className={'ui form'}>
          <div className="field">
            <label>Video title</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={e => this.setState({searchTerm: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;