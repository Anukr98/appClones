import { Avatar, IconButton } from '@material-ui/core'
import React , { useEffect, useState } from 'react'
import './css/Chat.css'

import {
    AttachFile ,
    MoreVert ,
    SearchOutlined ,
    InsertEmoticon , 
    Mic
} from '@material-ui/icons'

import { useParams } from 'react-router-dom'
import db from './firebase'
import { useStateValue } from './StateProvider'
import firebase from 'firebase'

function Chat() {

    const [input, setInput] = useState('')
    const { chatId } = useParams()
    const [chatName, setChatName] = useState('')
    const [messages, setMessages] = useState([])
    const [ {user} , dispatch ] = useStateValue()
    const [seed, setSeed] = useState('')

    useEffect( () => {
        
        if(chatId){
            db.collection('chats').doc(chatId).onSnapshot((snapshot) =>
                setChatName(snapshot.data().name)
            )

            db.collection('chats').doc(chatId).collection('messages').orderBy('timestamp' , 'asc').onSnapshot(snapshot => 
                setMessages(snapshot.docs.map(doc =>
                    doc.data()    
                ))
            )
        }

    } , [chatId])

    useEffect( () => {
        setSeed(Math.floor(Math.random() * 5000))
    } , [chatId] )

    const sendMessage = (e) => {
        e.preventDefault()
        db.collection('chats').doc(chatId).collection('messages').add({
            name : user.displayName ,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            message : input
        })
        setInput('')
    }

    return (
        <div className = 'chat'>
            
            <div className="chat__header">
                <Avatar 
                    src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}
                />

                <div className="chat__headerInfo">
                    <h3>{chatName}</h3>
                    <p>Last seen at {new Date(messages[messages.length -1]?.timestamp?.toDate()).toUTCString()}</p>
                    
                </div>

                <div className="chat__headerRight">
                    <IconButton> <SearchOutlined /> </IconButton>
                    <IconButton> <AttachFile /> </IconButton>
                    <IconButton> <MoreVert /> </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {
                    messages.map(message => (
                        <p className= {`chat__message ${message.name === user.displayName && 'chat__receiver'}`} >
                            <span className = 'chat__name'>{message.name}</span>
                            {message.message}
                            <span className = 'chat__timestamp'>{ new Date(message.timestamp?.toDate()).toUTCString() }</span>
                        </p>
                    ))
                }
            </div>

            <div className="chat__footer">
                <InsertEmoticon />

                <form action="">
                    <input 
                        type="text" 
                        autoComplete = 'false' 
                        placeholder = 'Type a message'
                        value = {input}
                        onChange = { e => setInput(e.target.value) }
                    />
                    <button type = 'submit' onClick = {sendMessage} >Send a message</button>
                </form>

                <Mic />
            </div>

        </div>
    )
}

export default Chat
