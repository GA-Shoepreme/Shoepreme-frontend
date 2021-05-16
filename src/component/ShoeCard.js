import React, {useState, useEffect} from 'react';
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
            <Link to={`/shoes/${shoe.shoeName}`}>
                <div>
                    <img src={shoe.imageLinks} alt={shoe.shoeName} />
                </div>
                <h3 className="cardBrandTag">{shoe.brand}</h3>
                <h2 className="cardNameTag">{shoe.shoeName}</h2>
                <h1 className="cardPriceTag">{`$${shoe.retailPrice}`}</h1>
            </Link>
        </div>
    );
}

export default ShoeCard;