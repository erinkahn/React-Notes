// State 
	// any data that should be saved and modified without necessarily being added to a database - for example, adding and removing items from a shopping cart before confirming your purchase.
		// These change ** are mutable
		// A way for React to remember saved values from within a component.
		// This is similar to declaring variables from within a component

// Array restructuring (state)
	// useState returns an ARRAY
	// Which is why it’s written like: const [thing, setThing] = React.useState(“”)
	// setThing is a function (second parameter is a function)


// A parent component can pass a state back to its children by using props. 
// This is what we call “Lifting state up” and then having a “top-down” data flow.


// useState() hook - returns an array, hooks the component into a state
	
	// Example:

		function Button() {
		  const [counter, setCounter] = useState(0)
			return (
				<button onClick={() => setCounter(counter+1)}>
				  {counter}
				</button>;
			)
		}

		ReactDOM.render(
		  <Button />, 
		  document.getElementById('mountNode'),
		);
