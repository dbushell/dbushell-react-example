import App, {StoreProvider} from './app';

function handleReady() {
  const $app = document.querySelector('#app');
  ReactDOM.render(
    <StoreProvider>
      <App />
    </StoreProvider>,
    $app
  );
}

if (/complete|interactive|loaded/.test(document.readyState)) {
  handleReady();
} else {
  document.addEventListener('DOMContentLoaded', handleReady);
}
