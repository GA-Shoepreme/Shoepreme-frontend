import React from 'react';
import SearchIcon from './icons/SearchIcon'
function SearchBar({setIsSearching,searchKeyword,changeSeachKeyword}) {
    const checkKeyword=()=>{
        if(searchKeyword.length<2){
            setIsSearching(false)
        }
    }
    const isSearching =(e)=>{
        if(e.key==='Enter'){
            setIsSearching(true)
        }
        checkKeyword()
    }
    return (
        <div className="searchBarContainer">
            <SearchIcon size={24} color={'rgb(180,180,180)'}/>
            <input id="search" type="text" placeholder="Search" value={searchKeyword} onChange={(e)=>{
                changeSeachKeyword(e)
                checkKeyword()
            }} onKeyDown={isSearching}/>  
        </div>
    );
}

export default SearchBar;