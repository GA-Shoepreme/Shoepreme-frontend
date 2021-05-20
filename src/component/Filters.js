import React from 'react';
import Filter from './Filter'
function Filters({shoesData}) {
    
    let filterLabel = ["MODEL", "MEN'S SIZES", "WOMEN'S SIZES", "YOUTH SIZES", "PRICE", "COLOR", "YEAR"]

    let filters = filterLabel.map((label)=>{
        if(label==="MODEL"){
            return(
                <Filter shoesData={shoesData} key={label} bodyType={label} opened={true}/>
            )
        }
        return(
            <Filter shoesData={shoesData} key={label} bodyType={label}/>
        )
    })

    return (
        <div className="filterContainer">
            <div className="filters">
                {filters}
            </div>
        </div>
    );
}

export default Filters;