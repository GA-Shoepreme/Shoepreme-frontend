import React,{ useState } from 'react';
import FilterHeader from './FilterHeader'
import CheckOutCardBody from './CheckOutCardBody'

function CheckOutCard({cardType, header, subTotal, itemCounts, cart, totalPrice, shippingFee, taxFee}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="checkOutCard">
            {(header)?<FilterHeader filterType={cardType} isOpen={isOpen} setIsOpen={setIsOpen}/>:<h1>{cardType}</h1>}
            {(!header)?<CheckOutCardBody totalPrice={totalPrice} itemCounts={itemCounts} cardType={cardType}/>:null}
            {(isOpen)?<CheckOutCardBody subTotal={subTotal} itemCounts={itemCounts} cardType={cardType} cart={cart} shippingFee={shippingFee} taxFee={taxFee} totalPrice={totalPrice}/>:null}           
        </div>
    );
}

export default CheckOutCard;