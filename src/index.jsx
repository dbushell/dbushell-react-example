import App, {StoreProvider} from './app';
import ReduxApp, {ReduxStoreProvider} from './app-redux';

function handleReady() {
  const $app = document.querySelector('#app');
  const $redux = document.querySelector('#app-redux');
  ReactDOM.render(
    <StoreProvider>
      <App />
    </StoreProvider>,
    $app
  );
  ReactDOM.render(
    <ReduxStoreProvider>
      <ReduxApp />
    </ReduxStoreProvider>,
    $redux
  );
}

if (/complete|interactive|loaded/.test(document.readyState)) {
  handleReady();
} else {
  document.addEventListener('DOMContentLoaded', handleReady);
}
