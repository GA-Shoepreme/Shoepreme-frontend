import React,{useState,useEffect} from 'react';

function FilterBodyBoxGrid({shoesData, bodyType}) {

    let[sizes,setSizes] = useState([5,6,7,8,9,10,11,12])
    let[sizeBoxes, setSizeBoxes] = useState([])

    useEffect(()=>{ 
        let tempSizeBoxes = sizes.map((size)=>{
            return(
                <div className="sizeFilterBox">{size}</div>
            )
        })
        setSizeBoxes(tempSizeBoxes)
    },[shoesData,sizes])

    return (
        <>
            <div className='sizeFilterBoxGrid'>
            {sizeBoxes}
            </div>
        </>
    );
}

export default FilterBodyBoxGrid;