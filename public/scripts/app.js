'use strict';

console.log("app.js is running");

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!',
  options: ['One', 'Two']

};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here Are Your Options:' : 'No Options Available'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      app.options[0]
    ),
    React.createElement(
      'li',
      null,
      app.options[1]
    )
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
