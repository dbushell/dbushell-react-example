import Root from './containers/root';

function handleReady() {
  const rootContainer = <Root />;
  const $app = document.querySelector('#app');
  ReactDOM.render(rootContainer, $app);
}

if (/complete|interactive|loaded/.test(document.readyState)) {
  handleReady();
} else {
  document.addEventListener('DOMContentLoaded', handleReady);
}
