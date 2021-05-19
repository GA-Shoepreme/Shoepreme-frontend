import React,{useState, useEffect} from 'react';
import ShoeCard from './ShoeCard'
import {Link} from 'react-router-dom'
import SortBy from './SortBy'
import Filters from './Filters'
import ResultHeader from './ResultHeader'
function ShoesGrid({count, showPrice, showHeader, headerContent, shopButton, shoesData}) {

    let [shoes, setShoes]= useState([])
    let [sortBy, setSortBy] = useState('Most Popular')
    let [shoeCardList, setShoeCardList] = useState([])
    useEffect(()=>{
        if(shoesData!==undefined){
            //Sort the results Price High Price Low
            let sortedShoes = shoesData.sort((shoeA,shoeB)=>{
                if(sortBy==='Newest'){
                    const shoeBDate = (shoeB.releaseDate !== null)?parseInt(shoeB.releaseDate.slice(0,10).replace('-','')):0
                    const shoeADate = (shoeA.releaseDate !== null)?parseInt(shoeA.releaseDate.slice(0,10).replace('-','')):0
                    return shoeBDate-shoeADate
                }
                if(sortBy==='Price High'){
                    const shoeBPrice = shoeB.retailPrice
                    const shoeAPrice = shoeA.retailPrice
                    console.log(shoeBPrice)
                    return shoeBPrice-shoeAPrice
                }
                if(sortBy==='Price Low'){
                    const shoeBPrice = shoeB.retailPrice
                    const shoeAPrice = shoeA.retailPrice
                    return shoeAPrice-shoeBPrice
                }
                return shoeB.estimatedMarketValue - shoeA.estimatedMarketValue
            })
            setShoes(sortedShoes)
        }
    },[shoesData,sortBy])

    useEffect(()=>{
        if(JSON.stringify(shoes)!=='[]'){
            console.log(sortBy)
            let cardList = shoes.map((shoe,index)=>{
                return(
                    <ShoeCard key={index} shoeData={shoe}/>
                )
            })
            setShoeCardList(cardList)
        }
    },[shoes,sortBy])
    
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
            <SortBy setSortBy={setSortBy}/>
            <div className="shoeGrid">
                {console.log(shoes)}
                {shoeCardList}
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