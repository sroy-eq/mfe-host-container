// import React, { useState } from 'react';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import React, { Suspense } from 'react';
import './App.css';


const Cats = React.lazy(() => import("cats/App"));

function App() {
  return (
    <div>
      <h1>Host Container</h1>
      <h2>Random Cats</h2>
      <hr />
      <Suspense fallback={'Loading Cats'}>
        <Cats />
      </Suspense>


    </div>
  );
}

export default App;
