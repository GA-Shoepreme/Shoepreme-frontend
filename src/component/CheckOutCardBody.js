import React,{useState, useEffect} from 'react';

function CheckOutCardBody({subTotal, itemCounts, cardType, cart, totalPrice, shippingFee, taxFee}) {

    useEffect(()=>{

    })
    
    const bodyContent=(cardType)=>{
        if(cardType ==='Order Summary'){
            return(
                <>
                <p>Total of {itemCounts} {(itemCounts>1)?'items':'item'}</p>
                <h2>${totalPrice}</h2>
                <p>Expected Delivery date:</p>
                <h2>May 13, 2021</h2>
                <button className="primaryButton red">Place your order</button>
                <p>By clicking "place order", I acknowledge that I have read and agree to the Terms & Conditions and the Privacy Policy.</p>
                </>
            )
        }
        if(cardType ==='Your Items'){
            return(
                <>
                <div className="flexSpaceBetween borderBottom">
                    <h6>Items</h6>
                    <h6>Price</h6>
                </div>
                <div>
                    {cart.map((item,index)=>{return(
                        <div key={index} className="checkOutItem">
                        <div className="left">
                            <img src={item.imageLinks} alt={item.shoeName} />
                            <div>
                                <h2>{item.shoeName}</h2>
                                <h3>{item.selectedSize}</h3>
                            </div>
                        </div>
                        <div>
                            <h2>${item.retailPrice}</h2>
                        </div>
                        </div>
                    )})}
                </div>
                <div>
                    <div className="flexSpaceBetween">
                        <h6>Subtotal</h6>
                        <h6>$ {subTotal}</h6>
                    </div>
                    <div className="flexSpaceBetween">
                        <h6>Shipping</h6>
                        <h6>$ {shippingFee}</h6>
                    </div>
                    <div className="flexSpaceBetween borderBottom">
                        <h6>Tax</h6>
                        <h6>$ {taxFee}</h6>
                    </div>
                    <div className="flexSpaceBetween">
                        <h6>Order total</h6>
                        <h6>$ {totalPrice}</h6>
                    </div>
                </div>
                </>
            )
        }
        if(cardType ==='Check Out Information'){
            return(
                <h1>hello</h1>
            )
        }
        return(
            <div>bye</div>
        )
    }
    return (
        <div className="checkOutCardBody">
            {bodyContent(cardType)}
        </div>
    );
}

export default CheckOutCardBody;