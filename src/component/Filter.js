import React,{useState} from 'react';
import FilterHeader from './FilterHeader'
import FilterBodyCheckBox from './FilterBodyCheckBox'
import FilterBodyBoxGrid from './FilterBodyBoxGrid'
import FilterBodyFromTo from './FilterBodyFromTo'
function Filter({bodyType}) {
    let filterBody;
    switch(bodyType){
        case "MODEL":
            filterBody= <FilterBodyCheckBox/>
            break;
        case "MEN'S SIZES": case "WOMEN'S SIZES": case "YOUTH SIZES": case "COLOR":
            filterBody = <FilterBodyBoxGrid/>
            break;
        default:
            filterBody = <FilterBodyFromTo/>
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