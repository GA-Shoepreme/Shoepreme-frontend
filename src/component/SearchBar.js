import React from 'react';
import SearchIcon from './icons/SearchIcon'
function SearchBar(props) {
    return (
        <div className="searchBarContainer">
            <SearchIcon size={24} color={'rgb(180,180,180)'}/>
            <input id="search" type="text" placeholder="Search"/>  
        </div>
    );
}

export default SearchBar;