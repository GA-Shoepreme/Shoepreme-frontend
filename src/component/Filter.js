import React,{useState} from 'react';
import FilterHeader from './FilterHeader'
import FilterBodyCheckBox from './FilterBodyCheckBox'
import FilterBodyBoxGrid from './FilterBodyBoxGrid'
import FilterBodyFromTo from './FilterBodyFromTo'

function Filter({shoesData, bodyType, filterShoes,isFiltered,setIsFiltered}) {

    let filterBody;
    switch(bodyType){
        case "MODEL":
            filterBody= <FilterBodyCheckBox shoesData={shoesData} filterShoes={filterShoes} setIsFiltered={setIsFiltered} bodyType={bodyType} isFiltered={isFiltered}/>
            break;
        case "MEN'S SIZES": case "WOMEN'S SIZES": case "YOUTH SIZES": case "COLOR":
            filterBody = <FilterBodyBoxGrid shoesData={shoesData} bodyType={bodyType} filterShoes={filterShoes} isFiltered={isFiltered} setIsFiltered={setIsFiltered}/>
            break;
        default:
            filterBody = <FilterBodyFromTo shoesData={shoesData} bodyType={bodyType} filterShoes={filterShoes}/>
    }

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="filterCard">
            <FilterHeader filterType={bodyType} isOpen={isOpen} setIsOpen={setIsOpen}></FilterHeader>
            
            {(isOpen)?
            <div className="filterBody">
            {filterBody}
            </div>
            :null
            }

        </div>
    );
}

export default Filter;