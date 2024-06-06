import React from 'react';


const Results = ({ data, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      {data ? (
        <>
          <h3>Headers</h3>
          <pre>{JSON.stringify(data.headers, null, 2)}</pre>
          <h3>Results</h3>
          <pre>{JSON.stringify(data.results, null, 2)}</pre>
        </>
      ) : (
        <div>No Data</div>
      )}
    </section>
  );
};

export default Results;
