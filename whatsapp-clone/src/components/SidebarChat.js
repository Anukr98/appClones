import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import '../css/sidebarChat.css'
import db from '../firebase'
import { useStateValue } from '../StateProvider'

function SidebarChat( { id , name , addNewChat } ) {

    const [messages, setMessages] = useState('')
    const [ {user} , dispatch ] = useStateValue()
    const [seed, setSeed] = useState('')

    useEffect( () => {
        if (id){
            db.collection('chats').doc(id).collection('messages').orderBy('timestamp' , 'desc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc =>
                        doc.data()
                    ))
            ))
        }
    } , [id])

    useEffect( () => {
        setSeed(Math.floor(Math.random() * 5000))
    } , [] )

    const createChat = () => {
        const name = prompt('Enter your name')
        
        if( name ) {
            db.collection('chats').add({
                name : name
            })
        }
    }

    return !addNewChat ? (
        <Link to = {`/chats/${id}`}>        
            <div className = 'sidebarChat'>
                <Avatar 
                    src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}
                />

                <div className="sidebarChat__info">
                    <h2> {name} </h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick = {createChat} className = 'sidebarChat'>
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat
