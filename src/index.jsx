import React from 'react';
import ReactDOM from 'react-dom';
import {RouterApp} from './app-router';

function handleReady() {
  const $app = document.querySelector('#app');
  // ReactDOM.render(<RouterApp />, $app);
  ReactDOM.hydrate(<RouterApp />, $app);
}

if (/complete|interactive|loaded/.test(document.readyState)) {
  handleReady();
} else {
  document.addEventListener('DOMContentLoaded', handleReady);
}
