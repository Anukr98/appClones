export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    //token : 'BQB01oij-u2FUkDStfhcQ2ZD1oLFtUgnN5D81NOVwiObOMLcTOjkICz30iAG-l9lSQ7U7A3r4RcxuIE6WmD4VeWAqbWdKkAFg9kUJ6wE57Es627Wu-LqcjsvWjaF9Yw14okEfZZXSMIpydY278WDxVBV3SWUfUFLMJp20GVnqneKvb4GsKrx',
}

const reducer = (state , action) => {
    console.log(action)         //always do this to know what happened or what's happening

    switch(action.type) {

        case 'SET_USER' :
            return{
                ...state,
                user : action.user
            }
        
        case 'SET_TOKEN' :
            return{
                ...state,
                token : action.token
            }

        case 'SET_PLAYLISTS' :
            return{
                ...state,
                playlists : action.playlists
            }
        case 'SET_DISCOVER_WEEKLY' :
            return{
                ...state,
                discover_weekly : action.discover_weekly
            }

        default : 
            return state
    }
}

export default reducer