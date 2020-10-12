import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './css/sidebar.css'
import {
    DonutLarge ,
    Chat , 
    MoreVert,
    Search
} from '@material-ui/icons'

import ChatField from './components/SidebarChat'
import { useState } from 'react'
import { useEffect } from 'react'
import db from './firebase'
import { useStateValue } from './StateProvider'

function Sidebar() {

    const [ {user} , dispatch ] = useStateValue()
    const [chats, setChats] = useState([])

    useEffect( () => {
        db.collection('chats').onSnapshot( snapshot => (
            setChats(snapshot.docs.map( doc => ({
                id : doc.id ,
                data : doc.data(),
            })))
        ))
    } , [] )

    return (
        <div className = 'sidebar'> 

            <div className="sidebar__header">
                <Avatar src = {user?.photoURL} />

                <div className="sidebar__headerRight">
                    <IconButton> <DonutLarge /> </IconButton>
                    <IconButton> <Chat /> </IconButton>
                    <IconButton> <MoreVert /> </IconButton>
                    
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <Search />
                    <input type="text" placeholder = 'Search or start new chat' />
                </div>
            </div>

            <div className="sidebar__chats">
                <ChatField addNewChat/>
                {chats.map( chat => (
                    <ChatField 
                        key = {chat.id}
                        id = {chat.id}
                        name = {chat.data.name}
                    />
                ))}
            </div>

        </div>
    )
}

export default Sidebar
