import React, { useState } from 'react';
import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = (requestParams) => {
    setLoading(true);
    // Mock API call
    const mockData = {
      headers: {
        'content-type': 'application/json'
      },
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };

    setTimeout(() => {
      setData(mockData);
      setRequestParams(requestParams);
      setLoading(false);
    }, 1000); // Simulate network delay
  };

  return (
    <>
      <Header />
      <div>
        <strong>Request Method:</strong> {requestParams.method}
      </div>
      <div>
        <strong>URL:</strong> {requestParams.url}
      </div>
      <Form handleApiCall={callApi} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );
};

export default App;
