import React from "react";
import { useState } from 'react';
import "./style.css"
import Message from './Message'
import {AllMessages} from '../messagesDB'
export default function MessagesList({unshowNewMessage,setNewMessage})
{
    let messagesList=AllMessages.map(oneMessage=>{return <Message messageData={oneMessage}/>})
return(
    <div className="message-list" style={{display: (unshowNewMessage === true? 'none' : 'flex')}}>
        <h2>Your messages:</h2>
        {messagesList} {/* //להבדיל בין נכנס ליוצא  */}
    </div>
);
}