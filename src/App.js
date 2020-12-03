import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './sections/Body';
import {
  BrowserRouter as Router ,
  Switch,
  Route
} from 'react-router-dom'
import Checkout from './sections/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './sections/Payment';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Orders from './sections/Orders'

const promise = loadStripe('pk_test_51HcsJkK8IvQS4jBbiNUx8XAAdD0QQwNFeNr1V2IUXNVJAAaNnQ0AKq9WbSKDx1eHsz8KNzxIb9QvHHYsYRiQYYZj00Dqn066Xr')

function App() {

  const [ {} , dispatch ] = useStateValue()

  useEffect( () => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser)

      if(authUser){
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      }
      else{
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
  },[])

  return (
    <Router>

      <div className="app">

        <Switch>

          <Route path = '/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path = '/login'>
            <Login />
          </Route>
          <Route path = '/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path = '/payment'>
            <Header />
            <Elements stripe = {promise}>
              <Payment />
            </Elements>            
          </Route>
          <Route path = '/'>
            <Header />
            <Body />
          </Route>

        </Switch>

      </div>

    </Router>
    
  );
}

export default App;
