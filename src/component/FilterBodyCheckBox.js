import React, {useState, useEffect} from 'react';

function FilterBodyCheckBox({shoesData, bodyType, filterShoes,isFiltered, setIsFiltered}) {
    
    let [silhouettes,setSilhouettes] = useState([]);
    let [checkBoxList,setCheckBoxList] = useState([]);
    let [selectedSilhouettes,setSelectedSilhouettes] = useState([]);

    useEffect(()=>{
        let tempSil=[];
        shoesData.forEach((item)=>{
            if(tempSil.indexOf(item.silhouette)===-1){
                tempSil.push(item.silhouette)
            }
        })
        setSilhouettes(tempSil)
    },[shoesData])//isFiltered

    useEffect(()=>{
        if(isFiltered === false && selectedSilhouettes.length>=1){
            selectedSilhouettes.splice(0,selectedSilhouettes.length)
            let temp = Array.from(selectedSilhouettes)
            setSelectedSilhouettes(temp)
            const checkboxes = document.querySelectorAll('.modelCheckBoxLabel')
            checkboxes.forEach((checkbox)=>{
                checkbox.style.backgroundColor='#eeeeee'
            })
        }
    },[isFiltered])//isFiltered
    
    const addAtFilter=(silhouette)=>{
        if(selectedSilhouettes.indexOf(silhouette)===-1){
            selectedSilhouettes.push(silhouette)
            setSelectedSilhouettes([...selectedSilhouettes])
        }
    }

    const removeAtFilter=(silhouette)=>{
        if(selectedSilhouettes.indexOf(silhouette)!==-1){
                selectedSilhouettes.splice(selectedSilhouettes.indexOf(silhouette),1)
                setSelectedSilhouettes([...selectedSilhouettes])
        }
    }

    const handleCheckEvent =(e,silhouette)=>{        
        //change checkbox style by clicking it
        const red = '#ed1c25'
        const gray = '#eeeeee'
        if(e.target.tagName==='SPAN'){
            const currentBgColor = window.getComputedStyle(e.target).getPropertyValue('background-color')
            if(currentBgColor ==='rgb(238, 238, 238)'){
                e.target.style.backgroundColor=red
                addAtFilter(silhouette)
            } else {
                e.target.style.backgroundColor=gray
                removeAtFilter(silhouette) 
            }
        }
        if(e.target.tagName==='LABEL'){
            const checkBox = e.target.querySelector('.modelCheckBoxLabel')
            const currentBgColor = window.getComputedStyle(checkBox).getPropertyValue('background-color')
            if(currentBgColor ==='rgb(238, 238, 238)'){
                checkBox.style.backgroundColor=red
                addAtFilter(silhouette)
            } else {
                checkBox.style.backgroundColor=gray
                removeAtFilter(silhouette) 
            }
        }

        //active filter
        if(selectedSilhouettes.length>=1){
            filterShoes(e,bodyType,selectedSilhouettes)
        } else {
            setIsFiltered(false)
        }
    }

    useEffect(()=>{
        let tempList = silhouettes.map((silhouette,index)=>{
            return(
                <label key={`${silhouette}+${index}`} className="checkBoxBox" onClick={(e)=>{
                    e.preventDefault()
                    handleCheckEvent(e,silhouette)
                }}>{silhouette}
                    <input type="checkbox" className="modelCheckBox"
                    />
                    <span className="modelCheckBoxLabel"></span>
                </label>
        )
    })
        setCheckBoxList(tempList)
    },[silhouettes])

    return (
        <>
            {checkBoxList}
        </>
    );
}

export default FilterBodyCheckBox;