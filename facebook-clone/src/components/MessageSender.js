import React, { useState } from 'react'
import '../css/messageSender.css'
import { Avatar } from '@material-ui/core'
import { Videocam, PhotoLibrary, InsertEmoticon } from '@material-ui/icons'
import { useStateValue } from '../StateProvider'
import db from '../firebase'
import firebase from 'firebase'

function MessageSender() {

    const [{ user } , dispatch] = useStateValue()

    const [input, setInput] = useState('')
    const [ imageURL , setImageURL] = useState('')


    const handleSubmit = e => {
        e.preventDefault()
        db.collection('posts').add({
            message : input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            profilePic : user.photoURL,
            user : user.displayName,
            image : imageURL
        })
        setImageURL('')
        setInput('')
    }

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar src = {user.photoURL} />

                <form action="">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        name=""
                        id=""
                        placeholder={`What's on your mind ${user.displayName}?`}
                        className='messageSender__input'
                    />
                    <input
                        value = {imageURL}
                        onChange = { (e) => setImageURL(e.target.value)}
                        type="text"
                        name=""
                        id=""
                        placeholder={`Insert Image(Optional)`}
                    />

                    <button onClick={handleSubmit} type='submit'>
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
