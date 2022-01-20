
// To create a component:
ReactDOM.render(
	<component />,
	// 	DOM node (html element to hold react markup)
)

// 3 basic concepts of react:
	// 1. Components 
	//     1. Like functions
	//     2. Input / output (props, state, UI)
	//     3. Reusable
	//     4. Composable
	//     5. Can manage private state to hold data
	// 2. Reactive updates
	//     1. React will react to changes
	//     2. Automatically updates to browser
	// 3. Virtual views in memory
	//     1. Generate HTML by using JS
	//     2. No HTML template language
	//     3. Tree reconciliation (virtual Dom)


// React components are either:
	// 1. Functional component 
	// 2. Class component 


// IMPORTANT RULE:  If you ever have a class component with only a render method – you should always make it a *functional component.

// - Component names must be CAPITALIZED


// CLASS COMPONENTS VS FUNCTIONAL COMPONENTS:

	// FUNCTIONAL   -  stateLESS & hooks
		// easier to read / understand
		// easier to test / debug
		// more reusable

	// CLASS  -  state & lifecycle methods
		// https://medium.freecodecamp.org/7-reasons-to-outlaw-reacts-functional-components-ff5b5ae09b7c
