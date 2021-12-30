import React, { Suspense } from 'react';
import './App.css';


const Cats = React.lazy(() => import("cats/App"));
const Dogs = React.lazy(() => import("dogs/App"));


function App() {
  return (
    <div>
      <h1>Host Container</h1>
      <hr />
      <h2>Remote App - Cats</h2>
      <Suspense fallback={'Loading Cats'}>
        <Cats />
      </Suspense>

      <hr />
      <h2>Remote App - Dogs</h2>
      <Suspense fallback={'Loading Dogs'}>
        <Dogs />
      </Suspense>
    </div>
  );
}

export default App;
