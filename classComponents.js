// 17 examples of class components

//-- 1: 
class MyComponent extends React.Component {
  constructor(props) { //states and props go inside the constructor
    super(props);
    this.state = { // stateful component
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this); // if a method needs to access some internal state inside the constructor then the method (click event below) needs to be bound to the instance of the class (so inside the constructor)
  }

  handleClick() { // functions go before the render function

    this.setState({ // changing state similar to function component but different syntax
      name: 'React Rocks!'
    })
    // Change code above this line
  }

  render() { // different from functional components which don't need a render function
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

// notes ----
// yes components can change state
// you use 'this' in class components but not functional components
// there are both stateful components and stateless components
// the component above is stateful because it has a state in the constructor
// if it didn't have a state in the constructor, it would be stateless


//-- 2: 
//toggle visibility on click
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    
    this.toggleVisibility = this.toggleVisibility.bind(this); //bind method to this
  
  }

  toggleVisibility() {
    this.setState(state => { // see what the last value of state was and change to opposite on click
      if (state.visibility === false) {
        return { visibility: true };
      } else {
        return { visibility: false };
      }
    })
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}


//-- 3: 
// count up and down or reset count
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // bind methods below to 'this'
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  
  increment() {
    this.setState(state => ({ // get state of the count before you click then add 1
      count: state.count + 1
    }))
  }
  decrement() {
    this.setState(state => ({ // get the state of the count before you click then remove 1
      count: state.count - 1
    }))
  }
  reset() {
    this.setState({ // set state back to zero
      count: 0
    })
  }

  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};



//-- 4: 
// input value as you type will show the data as you type
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // state of input value starts as empty
      input: ''
    };
    this.handleChange = this.handleChange.bind(this); // bind the method to this
  }

  handleChange(event) { 
    this.setState({
      input: event.target.value //on input change, update the state of input to be the value of the input field
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange}/> {/* get value of input field and as you type call the method above to set the state of the input */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p> {/* show the input value as you type below */}
      </div>
    );
  }
};



//-- 5: 
// submit a form and display what you typed in the input field below
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this); // bind method to this
    this.handleSubmit = this.handleSubmit.bind(this); // bind method to this
  }

  handleChange(event) {
    this.setState({
      input: event.target.value // set state to whatever value you type in the input field 
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submit: this.state.input // on submit set state to new input value 
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}> 
          <input value={this.state.input} onChange={this.handleChange}/>
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1> {/* print value below */}
      </div>
    );
  }
}




//-- 6: 
// passing props down from parent to child
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
      <div>
        <Navbar name={this.state.name}/> {/* pass name prop to navbar */}
      </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1> {/* display prop of name */}
    </div>
    );
  }
};




//-- 7: 
// passing functions and methods down just like a prop
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this); // bind method to this
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
      <div>
      <GetInput input={this.state.inputValue} handleChange={this.handleChange}/> {/* pass down state of inputvalue and hande change method to getInput child component */}
      <RenderInput input={this.state.inputValue}/>
      </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};



//-- 8: 
// Lifecycle Method componentWillMount
// special methods that provide opportunities to perform actions at specific points in the lifecycle of a component.
// allow you to catch components at certain points in time.
// componentWillMount() componentDidMount() shouldComponentUpdate() componentDidUpdate() componentWillUnmount()
// componentWillMount will be removed in react version 17 
// componentWillMount is called before the render() method when a component is being mounted to the DOM.
// The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount(). 

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() { // after 2.5 seconds the state of active users will change to 1273
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1> 
      </div>
    );
  }
}



//-- 9: 
// The componentDidMount() method is also the best place to attach any event listeners you need to add for specific functionality.
// when you press enter on the keyboard, display the message in the h1

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      message: '' // state is empty
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress) // when you key down enter, you display the message
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress) // dont show the message when you remove the keydown listener
  }

  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }

  handleKeyPress(event) {
    if (event.keyCode === 13) { // click enter and message shows
      this.handleEnter();
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1> 
      </div>
    );
  }
};





//-- 10: 
// optimize re-renders with shouldComponentUpdate
// if any component receives new state or new props, it re-renders itself and all its children. This is usually okay. But React provides a lifecycle method you can call when child components receive new state or props, and declare specifically if the components should update or not. The method is shouldComponentUpdate(), and it takes nextProps and nextState as parameters.
// This method is a useful way to optimize performance. For example, the default behavior is that your component re-renders when it receives new props, even if the props haven't changed. You can use shouldComponentUpdate() to prevent this by comparing the props. 
// The method must return a boolean value that tells React whether or not to update the component. You can compare the current props (this.props) to the next props (nextProps) to determine if you need to update or not, and return true or false accordingly.

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?'); 
    if (nextProps.value % 2 == 0) { // if the next number is even then update the component, otherwise don't re-render hte component
      return true; // next prop value is 2,4,6,8,....
    } else {
      return false;
    }
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>; // show prop value
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // start with zero
      value: 0
    };
    this.addValue = this.addValue.bind(this); //bind method to this
  }

  addValue() {
    this.setState(state => ({ // each tmie the add button is clicked, add one to the current state value
      value: state.value + 1
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}



//-- 11: 
// random text generator

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '', // input field is empty by default
      randomIndex: '' // random number is empty by default
    };
    this.ask = this.ask.bind(this); // bind methods below to this
    this.handleChange = this.handleChange.bind(this);
  }

  ask() {
    if (this.state.userInput) { // if input field is not empty then set the state to a random number
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }

  handleChange(event) {
    this.setState({
      userInput: event.target.value // when an event happens set the empty input field value to what you type
    });
  }

  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];

    const answer = possibleAnswers[this.state.randomIndex]; // get state/value of the random index

    return (
      <div>
        <input type='text' value={this.state.userInput} onChange={this.handleChange}/> {/* on input change call handle change method */}
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button> {/* on submit call ask method to get random index value */}

        <h3>Answer:</h3>
        <p>{answer}</p> {/* print out random answer */}
      </div>
    );
  }
}




//-- 12: 
// if else conditionals and changing the UI
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // conditional - if the state of display is false then just show the button and not the text
    if (this.state.display === false) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    } else { // otherwise show the button and the text
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    }
  }
};



//-- 13: 
// && conditionals
// If the condition is true, the markup will be returned.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>} {/* if the display is true then show the text displayed! otherwise don't show it */}
       </div>
    );
  }
};



//-- 14: 
// ternary expression ? :
class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      userAge: ''
    }
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }

  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }

  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;

    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        {/* if user age is empty show the submit button */}
        {/* or if user age is greater than or = to 18 show you may enter button */}
        {/* else show you shall not pass button */}
        {
          this.state.userAge === '' 
            ? buttonOne
            : this.state.userAge >= 18
              ? buttonTwo
              : buttonThree
          }
      </div>
    );
  }
}



//-- 15: 
//Render Conditionally from Props 
// use the value of a given prop to automatically make decisions about what to render.

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>; // if fifty fifty prop value is true (greater than .5) then you win else you lose
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this); //  bind method below to this
  }

  handleClick() {
    this.setState(prevState => {
      return {
        counter: this.state.counter + 1 // adding 1 each time you cilck 
      }
    });
  }

  render() {
    const expression = Math.random() >= .5 ? true : false; // random number greater than equal to .5 return true else return false
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression}/> {/* this is the props called fiftyFifty thats set to the expression value above */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}



//-- 16: 
// conditional styling

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this); // bind handlechange method to this
  }

  handleChange(event) {
    this.setState({ input: event.target.value }) // set state of input to what you type in 
  }

  render() {
    let inputStyle = {
      border: '1px solid black' // initial input style
    };

    if (this.state.input.length > 15) { // if you type more than 15 characters, change the inputstyle to:
      inputStyle.border = '3px solid red' 
    }

    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};




//-- 17: 
// Array.filter 
// users.filter(user => user.online);

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online === true); // filter users to show only online users
    const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>) // map thru online users and display their usernames

    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul> {/* usernames in a list */}
      </div>
    );
  }
}
