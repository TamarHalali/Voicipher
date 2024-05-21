import React from "react";
import { useState } from 'react';
import "./style.css"
import PersonalArea from "./PersonalArea";

function Login({showPersonalArea,setShowPersonalArea}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault();
    // Basic validation
    if (!email || !password) {
        setErrorMessage('Please enter both email and password.');
        return;
    }
    // Here you can add your login logic (e.g., API call)
    console.log('Email:', email);
    console.log('Password:', password);
    setErrorMessage('');
    // Reset form
    setEmail('');
    setPassword('');
};

return (
    <div className="App">
        <div className="login-form" style={{display: (showPersonalArea === true? 'none' : 'flex')}}>
        <h2>Login</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <button type="submit" onClick={(event)=>{event.preventDefault(); setShowPersonalArea(true); }}>Login</button>
        </form>
        </div>
    </div>
    );
}
export default Login;
