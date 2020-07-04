import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="log form__name">
        <label htmlFor="name">Email</label>
        <input
          className="input name"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="log form__password">
        <label htmlFor="password">contraseña</label>
        <input
          className="input"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="Inicia sesión" />
    </form>
  );
};

export default Login;
