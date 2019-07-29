import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App, {StoreProvider} from './app';
import ReduxApp, {ReduxStoreProvider} from './app-redux';

const AppContainer = () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
};

const ReduxAppContainer = () => {
  return (
    <ReduxStoreProvider>
      <ReduxApp />
    </ReduxStoreProvider>
  );
};

const RouterApp = () => {
  return (
    <Router>
      <React.Fragment>
        <ul>
          <li>
            <Link to="/react">React</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
        </ul>
        <Route path="/react" component={AppContainer} />
        <Route path="/redux" component={ReduxAppContainer} />
      </React.Fragment>
    </Router>
  );
};

function handleReady() {
  const $app = document.querySelector('#app');
  ReactDOM.render(<RouterApp />, $app);
}

if (/complete|interactive|loaded/.test(document.readyState)) {
  handleReady();
} else {
  document.addEventListener('DOMContentLoaded', handleReady);
}
