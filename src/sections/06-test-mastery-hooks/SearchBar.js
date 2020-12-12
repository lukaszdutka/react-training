import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = ({onSearchSubmit}) => {
  const [term, setTerm] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    onSearchSubmit(term);
  }

  return (
    <div className={'search-bar ui segment'}>
      <form onSubmit={onSubmit} className={'ui form'}>
        <div className="field">
          <label>Video title</label>
          <input
            type="text"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;