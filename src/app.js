class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: props.options
    }

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption  = this.handleDeleteOption.bind(this)
    this.handlePick          = this.handlePick.bind(this)
    this.handleAddOption     = this.handleAddOption.bind(this)
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      this.setState(() => ({ options }))
    } catch (e) {
      console.log(e)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json)
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption(optiontoRemove) {
    this.setState((prevState) => ({ options: prevState.options.filter((option) => option !== optiontoRemove) }))
  }

  handlePick() {
    const pick = this.state.options[ Math.floor( Math.random() * this.state.options.length )]
    alert( pick )
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter Valid Item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This Option Already Exists'
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }))
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={ this.state.options.length > 0 }
          handlePick={ this.handlePick }
        />
        <Options
          options={ this.state.options }
          handleDeleteOptions={ this.handleDeleteOptions }
          handleDeleteOption={ this.handleDeleteOption }
        />
        <AddOption
          handleAddOption={ this.handleAddOption }
        />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{ props.title }</h1>
      { props.subtitle && <h2>{ props.subtitle }</h2>}
    </div>
  )
}
Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={ props.handlePick }
        disabled={ !props.hasOptions }
      >
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={ props.handleDeleteOptions }>Remove All</button>
      { props.options.length === 0 && <p>Please Add An Option</p>}
      { props.options.map((option) => (
        <Option
          key={ option }
          optionText={ option }
          handleDeleteOption={ props.handleDeleteOption }
        />
      ) )}
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      { props.optionText }
      <button
        onClick={ () => props.handleDeleteOption(props.optionText) }>
        Remove
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: undefined
    }

    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error  = this.props.handleAddOption(option)

    this.setState(() => ({ error }))

    if (!error) { e.target.elements.option.value = '' }
  }

  render() {
    return (
      <div>
        { this.state.error && <p>{ this.state.error }</p> }
        <form onSubmit={ this.handleAddOption }>
          <input type='text' name='option'/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp options={['Do Stuff', 'Get Paid']}/>, document.getElementById('app'));
