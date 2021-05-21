import React,{useState,useEffect} from 'react';
import AddToShoppingCartIcon from '../icons/AddToShoppingCartIcon'
import Image from '../Image'
import {Link} from 'react-router-dom'
import LeftArrow from '../icons/LeftArrow'
import axios from 'axios'
import Button from '@material-ui/core/Button'

function ItemDetailPage({shoeId,putItemInTheCart,goBack}) {
    let [itemData, setItemData] = useState({})
    let[sizes,setSizes] = useState([5,6,7,8,9,10,11,12])
    let[selectedSize, setSelectedSize] = useState(5)

    useEffect(()=>{
        axios.get(`https://shoepreme-api.herokuapp.com/shoes/${shoeId}`)
        .then(res=>res.data)
        .then(data=>setItemData(data))
    },[])

    const selectSize =(e,size)=>{
        setSelectedSize(size)
        const sizeButtons = document.querySelectorAll('.sizeFilterBox')
        const sizeButton = e.target
        const sizeButtonBG = window.getComputedStyle(sizeButton).getPropertyValue
        ('background-color')
        const red = '#ed1c25'
        const originalBGColor = 'rgba(0, 0, 0, 0)'
        sizeButtons.forEach(button=>{
            button.style.backgroundColor = originalBGColor
            button.style.color = 'black'
            button.style.borderColor = 'rgb(240,240,240)'
        })
        if(sizeButtonBG === originalBGColor){
            sizeButton.style.backgroundColor = red
            sizeButton.style.color = 'white'
            sizeButton.style.borderColor = red
            
        } else {
            sizeButton.style.backgroundColor = originalBGColor
            sizeButton.style.color = 'black'
            sizeButton.style.borderColor = 'rgb(240,240,240)'
        }
    }

    return (
        <>
        <div className="itemContainer">
            <div className="itemContainerHeader">
                <button onClick={goBack} className='goBackButton'><LeftArrow size={18} color={'rgb(150, 150, 150)'}/>{itemData.brand}</button>
                <h1>{itemData.name}</h1>
            </div>
            <div className="itemContainerBody">
                <Image shoe={itemData} imageType={'original'}></Image>
                <div>
                    <div class="chooseYourSize">
                        <h2>Choose your size</h2>
                        <div>
                        {sizes.map((size)=>{
                            return(<div key={`${size}`} className="sizeFilterBox" onClick={(e)=>selectSize(e,size)}>{size}</div>)
                        })}
                        </div>
                    </div>
                    <div className="purchaseOptions">
                        <Button>
                        <Link className="purchase" to='/my/checkout' onClick={()=>putItemInTheCart({...itemData, selectedSize:selectedSize})}>
                        Purchase
                        </Link>
                        </Button>
                        <Link className="cart" onClick={()=>putItemInTheCart({...itemData,selectedSize:selectedSize})}>
                        <AddToShoppingCartIcon size={35}/>
                        </Link>
                    </div>
                    <div className="itemDescription">
                        <h2>About this product</h2>
                        <p>{(itemData.story==='')?'This product does not have the description yet. Our team will update this soon.':itemData.story}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ItemDetailPage;