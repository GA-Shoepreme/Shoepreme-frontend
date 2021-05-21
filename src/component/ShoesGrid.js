import React,{useState, useEffect} from 'react';
import ShoeCard from './ShoeCard'
import {Link} from 'react-router-dom'
import SortBy from './SortBy'
import Filters from './Filters'
import ResultHeader from './ResultHeader'
import Button from '@material-ui/core/Button'
function ShoesGrid({count, showPrice, showHeader, headerContent, shopButton, shoesData, sortFunction=true}) {

    let [shoes, setShoes]= useState([])
    let [sortBy, setSortBy] = useState('Most Popular')
    let [shoeCardList, setShoeCardList] = useState([])
    let [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', function(event) {
            setInnerWidth(window.innerWidth)
        }, true);
        
        // cleanup this component
        return () => {
            window.removeEventListener('resize', function(event) {
                setInnerWidth(window.innerWidth)
            }, true);
        };
      }, []);

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
            let cardList = shoes.map((shoe)=>{
                return(
                    <ShoeCard shoeData={shoe}/>
                )
            })
            setShoeCardList(cardList)
        } else {
            setShoeCardList([<h1>no result</h1>]) 
        }
    },[shoes,sortBy])
    
    let toggleFilters = () =>{
        let filters = document.querySelector('.filters')
        let filterContainer = document.querySelector('.filterContainer')
        let filtersDisplay = window.getComputedStyle(filters).getPropertyValue('display')
        if(filtersDisplay === 'none'){
            filters.style.display = 'flex'
            filterContainer.style.display = 'flex'
        } else {
            filters.style.display = 'none'
            filterContainer.style.display = 'none'
        }
    }

    let header = (headerContent)?
    <h4>{headerContent}</h4>:
    <>
    <ResultHeader count={count} toggleFilters={toggleFilters} innerWidth={innerWidth}/>{(innerWidth>=1024)?null:<Filters/>}</>


    return (
        <div className="shoeGridContainer">
            <div className='header'>
            {header}
            {(sortFunction)?<SortBy setSortBy={setSortBy}/>:null}
            </div>
            <div className="shoeGrid">
                {shoeCardList}
            </div>
            {(shopButton)?
            <div className='primaryButtonWrapper'>
            <Button>
                <Link to={`/${headerContent.toLowerCase().replace(' ','_')}`}>
                    See all {headerContent}
                </Link>
            </Button>
            </div>
            :
            null}
        </div>
    );
}

export default ShoesGrid;