import fs from 'fs';
import path from 'path';
import marked from 'marked';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {App} from './app-router';

const dir = path.resolve(__dirname, '../public');

const routes = ['/', '/react/', '/redux/'];

let data = fs.readFileSync(path.join(dir, 'data/pages/global.json'));
data = JSON.parse(data);

marked.setOptions({
  smartypants: true
});

/*
<script src="https://unpkg.com/react/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
*/
const template = `\
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${data.title}</title>
</head>
<body>
  <div id="app">{{app}}</div>
  <script src="https://unpkg.com/react/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/redux/dist/redux.js"></script>
  <script src="https://unpkg.com/react-redux/dist/react-redux.js"></script>
  <script src="https://unpkg.com/react-router/umd/react-router.min.js"></script>
  <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.js"></script>
  <script src="/assets/js/app.js"></script>
  <br>
  ${marked(data.copyright)}
</body>
</html>
`;

const render = (location = '/', context = {}) => {
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={location} context={context}>
      <App />
    </StaticRouter>
  );
  const html = template.replace('{{app}}', app);
  return html;
};

const build = route => {
  console.log(route);
  const filepath = path.join(dir, route);
  fs.mkdirSync(filepath, {recursive: true});
  fs.writeFileSync(filepath + 'index.html', render(route), {flag: 'w'});
};

routes.forEach(build);
