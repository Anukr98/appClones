import React from 'react'
import '../css/checkoutProduct.css'
import { useStateValue } from '../StateProvider'

function CheckoutProduct( { image , id , title , price , rating } ) {

    const [ {basket} , dispatch] = useStateValue()

    const removeFromCart = () => {
        dispatch({
            type : 'REMOVE_FROM_CART',
            id : id
        })        
    }
    return (
        <div className = 'checkoutProduct'>

            <img src={image} alt="" className = 'checkoutProduct__image'/>

            <div className="checkoutProduct__info">
                <p className = 'checkoutProduct__title'>{title}</p>
                <p className = 'checkoutProduct__price'>
                    <small>₹</small>
                    <strong> {price} </strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map( (_, i) => (
                            <p>&#11088;</p>
                        ))
                    }
                </div>
                <button onClick = {removeFromCart}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
