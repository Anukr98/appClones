//End point for login authentication
export const authEndPoint = 'https://accounts.spotify.com/authorize'

//redirect here after login has been authenticated
const redirectURI = 'https://spotify-clone-86834.firebaseapp.com/#'

//id to distinguish your app
const clientId = '555c6ae24e6047e58ac1568fe3d136f6'

//define permissions for what the user can and cannot do with their account
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
]

//get the access token specified in the URL once login has been authorized and process has been redirected back to your app

//window.location.hash searches for the hashtag symbol in the URL and does whatever specified from after that position

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)                       //scans entire string after the hash symbol
    .split('&')                         //stops at the & symbol because we don't need anything after that
    .reduce( (initial,item) => {

            //suppose URL is like #access_token=mysecretkey&name=anubhav&...
            //so we are basically stopping at first & to get 'access_token=mysecretkey'
            //after getting that, split is splitting it at the = sign to get 2 different string viz. 'access_token' and 'mysecretkey

        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])    //basically, just pulls out the access token

        return initial
    } , {})                                                 //empty object defines what the starting state of initial is
}

export const loginURL = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`