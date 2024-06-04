import React, { useState } from 'react';
import './Form.scss';

const Form = ({ handleApiCall }) => {
  const [formState, setFormState] = useState({ url: 'https://swapi.dev/api/people', method: 'GET' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleApiCall(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        URL:
        <input name="url" type="text" onChange={handleChange} />
      </label>
      <label>
        <select name="method" onChange={handleChange}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </label>
      <button type="submit">GO!</button>
    </form>
  );
};

export default Form;
