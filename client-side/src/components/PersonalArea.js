import React, { useState } from 'react';
import "./style.css"
import MessagesList from './MessagesList';
import NewMessage from './NewMessage';
export default function PersonalArea({ unshowLogin, setShowLogin }) {
    const [getShowNewMessage, setShowNewMessage] = useState(false);
    const [getShowMessageList, setShowMessageList] = useState(true);
    return (
        <div id="personalAreaStyle" style={{ display: (unshowLogin === false ? 'none' : 'flex') }}>
            {setShowLogin(false)}
            <NewMessage showMessageList={getShowMessageList} returnToMessageList={setShowMessageList} />
            <MessagesList unshowNewMessage={getShowNewMessage} setNewMessage={setShowNewMessage} />
            <button onClick={(event) => { event.preventDefault(); setShowNewMessage(true); }}>Create new message:</button>
        </div>
    )
}


