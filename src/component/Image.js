import { set } from 'mongoose';
import React,{useState, useEffect} from 'react';



function Image({shoe, imageType}) {

    let [imageName ,setImageName] = useState('');
    let [imageURL ,setImageURL] = useState('');
    let [noImageTag, setNoImageTag] = useState('');

    useEffect(()=>{
        if(JSON.stringify(shoe)!=='{}'){
            setImageName(shoe.name)
            setNoImageTag(shoe.brand)
        }
    },[shoe])

    useEffect(()=>{
        if(shoe.image!==undefined){
            setImageURL(shoe.image[imageType])
        }
    },[shoe.image,imageType])

    return (
        
        <>
        <img src={(imageURL !==""&&imageURL.indexOf('missing')===-1)?imageURL:`/assets/images/${noImageTag.toLowerCase().replace(' ','_')}_noimage.png`} alt={imageName} />
        </>
    );
}

export default Image;