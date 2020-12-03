import React , { useEffect , useState } from 'react';
import './App.css';
import Login from './components/Login'
import { getTokenFromUrl } from './spotify';
import Player from './components/Player'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi()       //all interactions of our app with Spotify (stream music and everything else is managed and made possible from here). Invoking a constructor to interact with Spotify


function App() {

  const [ { user , token , playlists } , dispatch ] = useDataLayerValue()

  //run code based on a given condition
  useEffect( () => {
    const hash = getTokenFromUrl()       //when login is authorized, we are redirected back here and the App component is loaded. At that exact time, we need that access token and this is how we do that
    window.location.hash = ''             //removes the access token from the URL just for security reasons....NO BIGGIE

    const _token = hash.access_token

    if(_token) {
      
      dispatch({
        type : 'SET_TOKEN',
        token : _token
      })
      
      spotify.setAccessToken(_token)      //giving access token to the Spotify API. The key to establsih talking and communication between Spotify and React
       
      spotify.getMe().then(user => {      //gets the user profile and returns a promise in the form of the user
        dispatch({
          type : 'SET_USER',
          user : user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type : 'SET_PLAYLISTS',
          playlists : playlists
        })
      })

      spotify.getPlaylist('37i9dQZEVXcVn9QUWpZXaZ')
      .then(response => {
        dispatch({
          type : 'SET_DISCOVER_WEEKLY',
          discover_weekly : response
        })
      })
    }
  } , [])       //array defines when the function should run. blank means run that snippet of code once based on the conditions, specifying some variable or component means run code everytime that particular value changes

  console.log(playlists)

  return (
    <div className="app">
      {
        //if login was successful and token was granted, render something else apart from the login screen

        token ? ( 
          <Player spotify = {spotify}/> 
        ) : ( 
          <Login /> 
        )
      }
    </div>
  );
}

export default App;
