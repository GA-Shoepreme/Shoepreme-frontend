import React from 'react';
import Filter from './Filter'
function Filters(props) {
    
    let filterLabel = ["MODEL", "MEN'S SIZES", "WOMEN'S SIZES", "YOUTH SIZES", "PRICE", "COLOR", "YEAR"]

    let filters = filterLabel.map((label)=>{
        return(
            <Filter key={label} bodyType={label}/>
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