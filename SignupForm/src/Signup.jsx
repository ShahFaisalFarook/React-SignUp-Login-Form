import React, { useState } from 'react'
import './Signup.css'

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignup =(e)=>{
        e.preventDefault();
        console.log("Signup", name , email, password)
    }
  return (
    <>
    <form onSubmit={handleSignup}>
        <div>
            <label>Name:</label>
            <input 
            type='name'
            value={name}
            onChange={(e) =>setName(e.target.value)}
            />
        </div>
        <div>
            <label>Email:</label>
            <input
            type='email'
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
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
        <button type="submit">Signup</button>
    </form>
    </>
  )
}

export default Signup
