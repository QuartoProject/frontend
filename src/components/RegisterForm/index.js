import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'lastName':
        setlastName(value);
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
    console.log(name, lastName, email, password);
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
        <label htmlFor="name">Apellido</label>
        <input
          className="input name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="log">
        <label htmlFor="name">Email</label>
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
      <div className="typeOfUser">
        <input className="anfitrion" type="checkbox" />
        <input className="usuario" type="checkbox" />
      </div>
      <input type="submit" value="Regístrate" />
    </form>
  );
};

export default Register;
