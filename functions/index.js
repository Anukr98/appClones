const functions = require('firebase-functions');

const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51HcsJkK8IvQS4jBbndXvASMVNIMlGu4wBT7CtOd84yJ2XijGQR9U5NEMZ8HvCK44Pt2zL4ibKLLrwdZldPw8pllZ00g2Qqs6OJ')

//App config
const app = express()

//Middleware
app.use(cors({ origin : true }))
app.use(express.json())


//API routes
app.get('/' , (request , response) => response.status(200).send('hello world'))
app.post('/payments/create' , async (request , response) => {
    const total = request.query.total
    console.log('payment req received' , total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount : total,
        currency : 'inr'
    })

    response.status(201).send({
        clientSecret : paymentIntent.client_secret
    })
})

//Listen command
exports.api = functions.https.onRequest(app)

//http://localhost:5001/freecharge-challenge/us-central1/api