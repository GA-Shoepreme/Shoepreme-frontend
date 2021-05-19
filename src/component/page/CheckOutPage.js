import React,{ useState, useEffect } from 'react';
import CheckOutCard from '../CheckOutCard'
import NoItemCartPage from '../page/NoItemCartPage'

function CheckOutPage({itemCounts, cart}) {

    const [subTotal, setSubTotal] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [shippingFee, setShippingFee] = useState(10)
    const [taxFee, setTaxFee] = useState(10)


    useEffect(()=>{
        if(cart!==[]){
            let total = 0;
            cart.forEach((item,index)=>{
                total += item.retailPrice
            })
            setSubTotal(total)
        }
    },[cart])

    useEffect(()=>{
        if(subTotal!==undefined){
            setTotalPrice(subTotal+shippingFee+taxFee)
        }
    },[subTotal])

    const checkOutContainer = (cart)=>{
        if(cart.length>1){

            return(
            <div className='checkOutContainer'>
            {console.log(cart)}
            <CheckOutCard header={false} cardType={'Order Summary'} totalPrice={totalPrice} itemCounts={itemCounts}/>

            <CheckOutCard header={true} cardType={'Your Items'} cart={cart} subTotal={subTotal} shippingFee={shippingFee} taxFee={taxFee} totalPrice={totalPrice}/>

            <CheckOutCard header={true} cardType={'Check Out Information'}/>
            <CheckOutCard header={false}/>
            </div>
            )
        }
        return <NoItemCartPage/>
    }

    return (
        checkOutContainer(cart)
    )
}

export default CheckOutPage;