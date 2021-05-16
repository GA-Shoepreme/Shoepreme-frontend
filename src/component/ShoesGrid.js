import React,{useState, useEffect} from 'react';
import ShoeCard from './ShoeCard'
import {Link} from 'react-router-dom'
import SortBy from './SortBy'
import Filters from './Filters'
import ResultHeader from './ResultHeader'
function ShoesGrid({count, showPrice, showHeader, headerContent, shopButton, shoesData}) {

    let [shoes, setShoes]= useState([])

    let shoesList = []

    useEffect(()=>{
        if(shoesData!==undefined){
            setShoes(shoesData)
        }
    },[shoesData])

    for(let i=0; i<count; i++){
        shoesList.push(
            <ShoeCard shoeData={shoes[i]} key ={i}/>
        )
    }
    
    let toggleFilters = () =>{
        let filters = document.querySelector('.filters')
        let filtersDisplay = window.getComputedStyle(filters).getPropertyValue('display')
        if(filtersDisplay === 'none'){
            filters.style.display = 'block'
        } else {
            filters.style.display = 'none'
        }
    }

    let header = (headerContent)?
    <h4>{headerContent}</h4>:
    <>
    <ResultHeader count={count} toggleFilters={toggleFilters}/><Filters/></>

    return (
        <div className="shoeGridContainer">
            {header}
            <SortBy/>
            <div className="shoeGrid">
                {shoesList}
            </div>
            {(shopButton)?
            <button className="primaryButton">
                <Link to={`/${headerContent.toLowerCase().replace(' ','_')}`}>
                    Shop {headerContent}
                </Link>
            </button>
            :
            null}
        </div>
    );
}

export default ShoesGrid;