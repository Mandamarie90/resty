import React, { useState } from 'react';
import './Form.scss';

const Form = ({ handleApiCall }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleApiCall({ url, method });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        URL:
        <input
          type="text"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <label>
        <input
          type="radio"
          name="method"
          value="GET"
          checked={method === 'GET'}
          onChange={(e) => setMethod(e.target.value)}
        />
        GET
      </label>
      <label>
        <input
          type="radio"
          name="method"
          value="POST"
          checked={method === 'POST'}
          onChange={(e) => setMethod(e.target.value)}
        />
        POST
      </label>
      <label>
        <input
          type="radio"
          name="method"
          value="PUT"
          checked={method === 'PUT'}
          onChange={(e) => setMethod(e.target.value)}
        />
        PUT
      </label>
      <label>
        <input
          type="radio"
          name="method"
          value="DELETE"
          checked={method === 'DELETE'}
          onChange={(e) => setMethod(e.target.value)}
        />
        DELETE
      </label>
      <button type="submit">Go!</button>
    </form>
  );
};

export default Form;
