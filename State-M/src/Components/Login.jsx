import React from 'react'
import { useState } from 'react';
import UserContext from '../Context/UserContext';
import { useContext } from 'react';


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault() 
        setUser(username, password)
    }

  return (
    <div>
        <h1>Login</h1>
        <input 
        type="text" 
        value={username} 
        placeholder='username'
        onChange={(e) => {
            setUsername(e.target.value)
        }}
        />
        {" "}
        <input 
        type="password"
        value={password}
        placeholder='password'
        onChange={(e) => {
            setPassword(e.target.value)
        }}
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login