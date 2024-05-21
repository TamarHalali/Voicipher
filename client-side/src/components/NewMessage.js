import React, { useState } from 'react';
import "./style.css";
import Message from './Message';
import { AllMessages } from '../messagesDB';

export default function NewMessage({showMessageList, returnToMessageList}) {
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);
    const [recipient, setRecipient] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ensure recipient, message, and file are not null or empty
        if (!recipient || !message || !file) {
            alert('Please fill in all fields');
            return;
        }

        // Handle form submission logic here
        console.log('Recipient:', recipient);
        console.log('Message:', message);
        console.log('File:', file);

        // Reset form
        setRecipient('');
        setMessage('');
        setFile(null);
        // Clear file input
        document.getElementById('file-input').value = null;
    };

    return (
        <form className="message-form" onSubmit={handleSubmit} style={{display: (showMessageList === true? 'none' : 'flex')}}>
            <div>
                <label>
                    Recipient:
                    <input 
                        type="text" 
                        placeholder="Enter recipient" 
                        value={recipient} 
                        required 
                        onChange={(event) => setRecipient(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Message:
                    <input 
                        type="text" 
                        placeholder="Enter your message" 
                        value={message} 
                        required 
                        onChange={(event) => setMessage(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    File:
                    <input
                        type="file"
                        id="file-input"
                        accept="audio/*" // Only accept audio files
                        required
                        className="file-input"
                        onChange={(event) => setFile(event.target.files[0])}
                    />
                </label>
            </div>
            <button type="submit" className="submit-button" onClick={(event)=>{event.preventDefault(); returnToMessageList(true); }}>Submit</button>
        </form>
    );
}
