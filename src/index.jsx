import {RouterApp} from './app-router';

function handleReady() {
  const $app = document.querySelector('#app');
  ReactDOM.render(<RouterApp />, $app);
}

if (/complete|interactive|loaded/.test(document.readyState)) {
  handleReady();
} else {
  document.addEventListener('DOMContentLoaded', handleReady);
}
