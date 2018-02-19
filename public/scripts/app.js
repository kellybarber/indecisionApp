'use strict';

// My Solution
// const app = {
//   title: 'Visibility Toggle',
//   text: ''
// }
//
// const showText = () => {
//   !app.text ? app.text = 'Wow, text!' : app.text = ''
//   render()
// }
//
// const render = () => {
//   const visible = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={showText}>{!app.text ? "Show Invisible Text" : "Hide Invisible Text"}</button>
//       <p>{app.text}</p>
//     </div>
//   )
//   ReactDOM.render(visible, appRoot)
// }
//
// const appRoot  = document.getElementById('app')
// render()


// Tutorial Solution
var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Hey. These are some details you can now see!'
      )
    )
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

render();
