console.log("app.js is running");

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!',
  options: []

}

const onRemoveAll = () => {
  app.options = []
  render()
}

const onFormSubmit = (e) => {
  e.preventDefault()

  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    render()
  }
}

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here Are Your Options:' : 'No Options Available'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        <li>{app.options[0]}</li>
        <li>{app.options[1]}</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

const appRoot  = document.getElementById('app')
render()
