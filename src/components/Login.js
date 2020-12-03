import React from 'react'
import '../css/login.css'
import { loginURL } from '../spotify'

function Login() {
    return (
        <div className = 'login'>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt=""/>
            <a href={loginURL}>Login With Spotify</a>
        </div>
    )
}

export default Login
