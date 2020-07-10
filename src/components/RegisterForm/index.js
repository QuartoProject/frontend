import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ENDPOINT = 'https://quarto-backend.herokuapp.com/api';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'lastname':
        setLastname(value);
        break;
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
    console.log({ name, lastname, username, email, password });
    axios
      .post(`${ENDPOINT}/register/`, {
        name,
        lastname,
        username,
        email,
        password,
        anfitrion: true,
      })
      .then((res) => {
        setError(false);
        history.push('/');
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err.response.data.email[0]);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="log">
        <label htmlFor="name">Nombre</label>
        <input
          className="input name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="log">
        <label htmlFor="lastname">Apellido</label>
        <input
          className="input name"
          type="text"
          name="lastname"
          value={lastname}
          onChange={handleChange}
          required
        />
      </div>
      <div className="log">
        <label htmlFor="username">Username</label>
        <input
          className="input name"
          type="text"
          name="username"
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
          value={password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="handleError">{error && <h2>{errorMessage}</h2>}</div>
      <input type="submit" value="Regístrate" />
    </form>
  );
};

export default Register;
