console.log("app.js is running");

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!',
  options: ['One', 'Two']

}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here Are Your Options:' : 'No Options Available'}</p>
    <ol>
      <li>{app.options[0]}</li>
      <li>{app.options[1]}</li>
    </ol>
  </div>
)


let count = 0
const addOne = () => {
  console.log('addOne')
}
const minusOne = () => {
  console.log('minusOne')
}
const reset = () => {
  console.log('reset');
}

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
)


const appRoot  = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
