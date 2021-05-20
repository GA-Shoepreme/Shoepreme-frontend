import React, {useState, useEffect} from 'react';

function FilterBodyCheckBox({shoesData}) {
    
    let [silhouettes,setSilhouettes] = useState([]);
    let [checkBoxList,setCheckBoxList] = useState([]);

    useEffect(()=>{
        let tempSil = shoesData.map((item)=>{
            if(silhouettes.indexOf(item.silhouette)===-1){
                return(item.silhouette)
            }
        })
        setSilhouettes(tempSil)
    },[shoesData])

    useEffect(()=>{
        let tempList = silhouettes.map((silhouette,index)=>{
            console.log(silhouette)
            return(
            <label key={`${silhouette}+${index}`} className="checkBoxBox">{silhouette}
                <input type="checkbox" className="modelCheckBox"/>
                <span className="modelCheckBoxLabel"></span>
            </label>
        )
    })
        setCheckBoxList(tempList)
    },[silhouettes])
    
    // const checkBoxList =(silhouettes.length>1)? silhouettes.map((silhouette)=>{
    //     return(
    //         <label className="checkBoxBox">{silhouette}
    //             <input type="checkbox" className="modelCheckBox"/>
    //             <span className="modelCheckBoxLabel"></span>
    //         </label>
    //     )
    // }):null
    
    return (
        <>
            {console.log(0,silhouettes)}
            {console.log(checkBoxList)}
            {checkBoxList}
        </>
    );
}

export default FilterBodyCheckBox;