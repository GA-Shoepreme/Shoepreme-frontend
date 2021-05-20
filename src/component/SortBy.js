
import React,{useState} from 'react';
import DownArrow from './icons/DownArrow'
import UpArrow from './icons/UpArrow'

function SortBy({setSortBy}) {

    let [dropIsOpen, setDropIsOpen] = useState(true);
    let [currentSort, setCurrentSort] = useState('Most Popular');

    const toggleDropDown =()=>{
        let dropdownContent = document.querySelector('.dropdown-content')
        if(dropIsOpen===true){
            setDropIsOpen(false)
            dropdownContent.style.display = 'flex'
        } else{
            setDropIsOpen(true) 
            dropdownContent.style.display = 'none'
        }
    }

    const changeSortMode =(e)=>{
         let newSortMode =e.target.innerHTML
         setSortBy(newSortMode)
         setCurrentSort(newSortMode)
         toggleDropDown()
    }

    return (
        <div className="sortByBox">
            <div onClick={toggleDropDown} className="dropdown">
                <span>Sort By: {currentSort}</span>
                <button className="dropbtn">
                    <DownArrow style={dropIsOpen} size={18}/>
                    <UpArrow style={!dropIsOpen} size={18}/>
                </button>
                </div>
                <div className="dropdown-content">
                    <button onClick={changeSortMode}>Most Popular</button>
                    <button onClick={changeSortMode}>Newest</button>
                    <button onClick={changeSortMode}>Price High</button>
                    <button onClick={changeSortMode}>Price Low</button>
                </div>
        </div>
    );
}

export default SortBy;