import React from 'react';
import './Results.scss';

const Results = ({ data }) => {
  return (
    <section>
      <pre>{data ? JSON.stringify(data, null, 2) : null}</pre>
    </section>
  );
};

export default Results;
