import React from 'react';
import { MdSearch } from 'react-icons/md';

import SearchIcon from '../../assets/images/search.svg';
import './styles.scss';

const Search = () => {
  return (
    <div className="search_box">
      <input type="text" placeholder="A donde quieres irte a vivir ?" />
      <MdSearch className="search" />
      {/* <img className="search" src={SearchIcon} alt="search-icon"></img> */}
    </div>
  );
};

export default Search;
