import React, {useState, useEffect} from 'react';
import Image from './Image'
import {Link} from 'react-router-dom'
function ShoeCard({shoeData}) {

    let [shoe, setShoe] = useState({})
    
    useEffect(()=>{
        if(shoeData !== undefined){
            setShoe(shoeData)
        }
    },[shoeData])

    return (
        <div className='shoeItem'>
            <Link to={`/shoes/${encodeURIComponent(shoe._id)}`}>
                <div>
                    <Image shoe={shoe} imageType={'thumbnail'}/>
                </div>
                <h3 className="cardBrandTag">{shoe.brand}</h3>
                <h2 className="cardNameTag">{shoe.name}</h2>
                <h1 className="cardPriceTag">{`$${shoe.retailPrice}`}</h1>
            </Link>
        </div>
    );
}

export default ShoeCard;