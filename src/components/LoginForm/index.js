import React, { useState } from 'react';

const ENDPOINT = 'https://quarto-backend.herokuapp.com/api';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useStater('');

  function login({ username, password }) {
    axios
      .post(`${ENDPOINT}/login/`, {
        username,
        password,
      })
      .then((res) => {
        console.log(res.json());
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'username' ? setUsername(value) : setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="log form__name">
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
      <div className="log form__password">
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
      <input type="submit" value="Inicia sesión" />
    </form>
  );
};

export default Login;
