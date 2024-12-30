import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChange =(e)=>{
        e.preventDefault();
        console.log("Login", email, password)
    }
  return (
    <>
    <form onSubmit={handleChange}>
        <div>
            <label>Email:</label>
            <input
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            />
        </div>
        <div>
            <label>Password:</label>
            <input
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Login
