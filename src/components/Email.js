import React, { useState } from 'react'
import './Email.css'

function Email() {

  const [error, setError] = useState('')

  const handleChange = (e)=>{
    const emailInput = e.target.value
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!regex.test(emailInput)){
      setError("Please input a valid email address")
    }else{
      setError("")
    }
  }

  return (
    <div className='email-container'>
      <div className='email-content'>
        <p>Please enter your email to continue:</p>
        <input 
        type="text" 
        size="35" 
        className="email" 
        onChange={handleChange} 
        autoFocus
        required/>
        <div className="underline"></div>
        <label><small>Email *</small></label>
        <span>{error}</span>
      </div>
    </div>
  )
}

export default Email
