/*! Router App */

import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactApp, {ReactStoreProvider} from './app-react';
import ReduxApp, {ReduxStoreProvider} from './app-redux';

const ReactAppContainer = () => {
  return (
    <ReactStoreProvider>
      <ReactApp />
    </ReactStoreProvider>
  );
};

const ReduxAppContainer = () => {
  return (
    <ReduxStoreProvider>
      <ReduxApp />
    </ReduxStoreProvider>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to="/react">React</Link>
        </li>
        <li>
          <Link to="/redux">Redux</Link>
        </li>
      </ul>
      <Route path="/react" component={ReactAppContainer} />
      <Route path="/redux" component={ReduxAppContainer} />
    </React.Fragment>
  );
};

const RouterApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export {ReactAppContainer, ReduxAppContainer, RouterApp};
