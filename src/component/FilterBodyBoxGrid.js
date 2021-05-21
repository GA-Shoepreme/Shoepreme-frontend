import React,{useState,useEffect} from 'react';

function FilterBodyBoxGrid({shoesData, bodyType, setIsFiltered, isFiltered, filterShoes}) {

    let[sizes,setSizes] = useState([5,6,7,8,9,10,11,12])
    let[sizeBoxes, setSizeBoxes] = useState([])
    let[colorBoxes, setColorBoxes] = useState([])
    let[selectedOptions, setSelectedOptions] = useState([])
    //gender, inventory ,colorway

    const addAtFilter=(size)=>{
        if(selectedOptions.indexOf(size)===-1){
            selectedOptions.push(size)
            setSelectedOptions([...selectedOptions])
        }
    }

    const removeAtFilter=(size)=>{
        if(selectedOptions.indexOf(size)!==-1){
                selectedOptions.splice(selectedOptions.indexOf(size),1)
                setSelectedOptions([...selectedOptions])
        }
    }

    const setSizeFilter=(e,size)=>{
        const gender = bodyType.split(' ')[0].replace("'S",'').toLowerCase()
        const sizeButton = e.target
        const sizeButtonBG = window.getComputedStyle(sizeButton).getPropertyValue
        ('background-color')
        const red = '#ed1c25'
        const originalBGColor = 'rgba(0, 0, 0, 0)'
        if(sizeButtonBG === originalBGColor){
            sizeButton.style.backgroundColor = red
            sizeButton.style.color = 'white'
            sizeButton.style.borderColor = red
            addAtFilter(size)
        } else {
            sizeButton.style.backgroundColor = originalBGColor
            sizeButton.style.color = 'black'
            sizeButton.style.borderColor = 'rgb(240,240,240)'
            removeAtFilter(size)
        }

        //active filter
        if(selectedOptions.length>=1){
            filterShoes(e,gender,selectedOptions)
        } else {
            setIsFiltered(false)
        }
    }
    
    useEffect(()=>{
        if(isFiltered === false && selectedOptions.length>=1){
            selectedOptions.splice(0,selectedOptions.length)
            let temp = Array.from(selectedOptions)
            setSelectedOptions(temp)
            const filterBoxes = [...document.querySelectorAll('.sizeFilterBox'),...document.querySelectorAll('.colorFilterBox')]
            filterBoxes.forEach((filterBox)=>{
                filterBox.style.backgroundColor = 'rgba(0,0,0,0)'
                filterBox.style.color = 'black'
                filterBox.style.borderColor = 'rgb(240,240,240)'
            })
        }
    },[isFiltered])//isFiltered

    useEffect(()=>{ 
        let tempSizeBoxes = sizes.map((size,)=>{
            return(
                <div key={`${bodyType}${size}`} className="sizeFilterBox" onClick={(e)=>setSizeFilter(e,size)}>{size}</div>
            )
        })
        setSizeBoxes(tempSizeBoxes)
    },[shoesData,sizes])

    useEffect(()=>{ 
        let colors=[];
        let tempColorBoxes =[];
        shoesData.forEach((shoe)=>{
            let swatches = shoe.colorway.split('/')
            swatches.forEach((swatch)=>{
                if(colors.indexOf(swatch)===-1){
                    colors.push(swatch)
                }
            })
        })
        colors.forEach((color)=>{
            tempColorBoxes.push(
                <div className="colorFilterBox"
                    onClick={(e)=>{setSizeFilter(e,color)}}>
                    {color} 
                </div>
            )
        })
        setColorBoxes(tempColorBoxes)
    },[shoesData])

    const filtersRender =(bodyType)=>{
        if(bodyType === "COLOR"){
            return colorBoxes
        }
        return sizeBoxes
    }

    return (
        <>
            <div className='sizeFilterBoxGrid'>
                {filtersRender(bodyType)}
            </div>
        </>
    );
}

export default FilterBodyBoxGrid;