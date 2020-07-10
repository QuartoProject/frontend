import React, { useState } from 'react';

const ENDPOINT = 'https://quarto-backend.herokuapp.com/api';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${ENDPOINT}/register/`, {
        username,
        email,
        password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err.message));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="log">
        <label htmlFor="username">Username</label>
        <input
          className="input name"
          type="text"
          name="username"
          aria-label="username"
          value={username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="log">
        <label htmlFor="email">Email</label>
        <input
          className="input name"
          type="email"
          name="email"
          aria-label="email"
          value={email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="log">
        <label htmlFor="password">contraseña</label>
        <input
          className="input"
          type="password"
          name="password"
          aria-label="password"
          value={password}
          onChange={handleChange}
          required
        />
      </div>
      <input type="submit" value="Regístrate" />
    </form>
  );
};

export default Register;
