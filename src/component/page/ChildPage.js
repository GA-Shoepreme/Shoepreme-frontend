import React,{useEffect,useState} from 'react';
import axios from 'axios'
import HeroSection from '../HeroSection'
import ShoesGrid from '../ShoesGrid'
import Filters from '../Filters'

function ChildPage({pagename}) {

    let [shoesData, setShoesData] = useState([])
    let [filteredShoesData, setFilteredShoesData] = useState([])
    let [isFiltered, setIsFiltered] = useState(false)

    useEffect(()=>{
        if(pagename!=='more_sneakers'){
            axios.get(`https://shoepreme-api.herokuapp.com/shoes/${pagename}`)
            .then(res=>res.data)
            .then(data=>{
                setShoesData(data)
            })
        } else {
            axios.get(`https://shoepreme-api.herokuapp.com/shoes`)
            .then(res=>res.data)
            .then(data=>{
                setShoesData(data)
            })
        }
      },[pagename])
    
    const filterShoes =(e, filterType, filterCondition)=>{
        setIsFiltered(true)
        let testData = (isFiltered)?filteredShoesData:shoesData

        if(filterType==="MODEL"){
            let tempShoes=[]
            testData.forEach((shoe)=>{
                if(filterCondition.indexOf(shoe.silhouette) !== -1){
                    tempShoes.push(shoe)
                }
            })
            setFilteredShoesData(tempShoes)
        }
        if(filterType==="PRICE"){
            let highPriceLimit = filterCondition[1]
            let lowPriceLimit = filterCondition[0]
            let tempShoes=[]
            testData.forEach((shoe)=>{
                if(shoe.retailPrice<highPriceLimit &&
                    shoe.retailPrice>=lowPriceLimit){
                        tempShoes.push(shoe)
                }
            })
            setFilteredShoesData(tempShoes)
        }
        if(filterType==="YEAR"){
            let highYearLimit = filterCondition[1]
            let lowYearLimit = filterCondition[0]
            let tempShoes=[]
            testData.forEach((shoe)=>{
                if(shoe.releaseYear<highYearLimit &&
                    shoe.releaseYear>=lowYearLimit){
                        tempShoes.push(shoe)
                }
            })
            setFilteredShoesData(tempShoes)
        }
        if(filterType==="men" || filterType==="women"|| filterType==="youth"){
            let tempShoes=[]
            testData.forEach((shoe)=>{  
                if(shoe.gender === filterType){
                    filterCondition.forEach((size)=>{
                        if(shoe.inventory[size]>0 && tempShoes.indexOf(shoe)===-1){
                            tempShoes.push(shoe)
                        }
                    })
                }
            })
            setFilteredShoesData(tempShoes)
        }
        if(filterType==="color"){//colorway
            console.log(filterType, filterCondition)
            let tempShoes=[]
            testData.forEach((shoe)=>{  
                filterCondition.forEach((color)=>{
                    if(shoe.colorway.includes(color)>0 && tempShoes.indexOf(shoe)===-1){
                        tempShoes.push(shoe)
                    }
                })
            })
             setFilteredShoesData(tempShoes)
        }
    }

    return (
        <div>
            <HeroSection pagename={pagename}></HeroSection>
            <div className="childPageBodyContainer">
                
                <div>
                    <Filters shoesData={shoesData} filterShoes={filterShoes} isFiltered={isFiltered} setIsFiltered={setIsFiltered}/>
                </div>
                <ShoesGrid count={(isFiltered)?filteredShoesData.length:shoesData.length} showPrice={false} showHeader={true} headerContent={null}
            shopButton={false} shoesData={(isFiltered)?filteredShoesData:shoesData}/>
            </div>
        </div>
    );
}

export default ChildPage;