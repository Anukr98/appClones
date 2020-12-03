import { useElements, useStripe , CardElement } from '@stripe/react-stripe-js'
import React , { useState , useEffect } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link , useHistory } from 'react-router-dom'
import CheckoutProduct from '../components/CheckoutProduct'
import '../css/payment.css'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer'
import axios from '../axios'
import { db } from '../firebase'

function Payment() {

    const [ {basket , user} , dispatch] = useStateValue()
    const history = useHistory()
    const [error, setError] = useState(null)
    const [disable, setDisable] = useState(true)
    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false)
    const [clientSecret, setClientSecret] = useState(true)

    const stripe = useStripe()
    const elements = useElements()

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method : 'post',
                url : `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret()
    }, [basket])

    console.log('The secret is' , clientSecret)

    const handleSubmit = async e => {
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret , {
            payment_method : {
                card : elements.getElement(CardElement)
            }
        }).then( ({paymentIntent}) => {
            
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket : basket,
                amount : paymentIntent.amount,
                created : paymentIntent.created
            })
            
            setSucceeded(true)
            setError(null)
            setProcessing(false)
            dispatch({
                type : 'CLEAR_CART'
            })
            history.replace('/orders')
        })
    }

    const handleChange = e => {
        setDisable(e.empty)
        setError(e.error ? e.error.message : '')
    }

    return (
        <div className = 'payment'>
            
            <div className="payment__container">

                <h1>
                    Checkout
                    ( <Link to = '/checkout'>{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>D-336 Golf View Apartments</p>
                        <p>Saket, Delhi</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    id = {item.id}
                                    title = {item.title}
                                    image = {item.image}
                                    price = {item.price}
                                    rating = {item.rating}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">

                        <form onSubmit = {handleSubmit}>
                            <CardElement 
                                onChange = {handleChange}
                            />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText = { value => (
                                        <>
                                            <h3>Order total : {value}</h3>
                                        </>
                                    )}
                                    decimalScale = {2}
                                    value = { getBasketTotal(basket) }
                                    displayType = {"text"}
                                    thousandSeparator = {true}
                                    prefix = {"₹"}
                                />
                                <button 
                                    disabled = {processing || disable || succeeded}
                                >
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>

                            {
                                error && <div>{error}</div>
                            }
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
