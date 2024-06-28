import React from 'react'
import './LoginRegister.css'

export default function Register() {
  return (
    <div className="signup-container">
      <p>Create an account to plan your next adventure!</p>
      <div className="signup-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" />

        <button type="submit">Sign Up</button>
      </div>
    </div>
  )
}
