import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate(); // 👈 for redirection

  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password
    };

    axios.post('https://reqres.in/api/login', payload)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token)); // Correct key is 'token' in reqres API
        alert("Login success");
        navigate('/profile'); // 
      })
      .catch((err) => {
        alert("Login failed");
      });
  };

  return (
    <div id="main-container">
      <p>Login Page</p>
      <div>
        <p>Email</p>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <p>Password</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}
