import React from 'react';
import Filter from './Filter'
import Button from '@material-ui/core/Button'

function Filters({shoesData,filterShoes,isFiltered,setIsFiltered}) {
    
    let filterLabel = ["MODEL", "MEN'S SIZES", "WOMEN'S SIZES", "YOUTH SIZES", "PRICE", "COLOR", "YEAR"]

    let filters = filterLabel.map((label)=>{
        if(label==="MODEL"){
            return(
                <Filter shoesData={shoesData} key={label} bodyType={label} opened={true} filterShoes={filterShoes} isFiltered={isFiltered} setIsFiltered={setIsFiltered}/>
            )
        }
        return(
            <Filter shoesData={shoesData} key={label} bodyType={label} filterShoes={filterShoes} isFiltered={isFiltered} setIsFiltered={setIsFiltered}/>
        )
    })

    return (
        <div className="filterContainer">
            <div className="filters">
                {filters}
                <Button onClick={(e)=>{
                    setIsFiltered(false)
                    console.log('hi')
                    }}>Clear filter</Button>
            </div>
        </div>
    );
}

export default Filters;