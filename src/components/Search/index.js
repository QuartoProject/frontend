import React from 'react';

import SearchIcon from '../../assets/images/search.svg';
import './styles.scss';

const Search = () => {
  return (
    <div className="search_box">
      <input type="text" placeholder="A donde quieres irte a vivir ?" />
      <img className="search" src={SearchIcon}></img>
    </div>
  );
};

export default Search;
