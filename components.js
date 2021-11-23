
To create a component:
ReactDOM.render(
	<component />,
	DOM node (html element to hold react markup)
)

3 basic concepts of react:
1. Components 
    1. Like functions
    2. Input / output (props, state, UI)
    3. Reusable
    4. Composable
    5. Can manage private state to hold data
2. Reactive updates
    1. React will react to changes
    2. Automatically updates to browser
3. Virtual views in memory
    1. Generate HTML by using JS
    2. No HTML template language
    3. Tree reconciliation (virtual Dom)


React components are either a:
1. Function component (simpler) - used to build React hooks (stateful logic)
2. Class component (more powerful - stateless but still can hold state data) - used for printing the UI

- a class component that only has markup within the render() method can safely be converted to a function component.

- Component names must be CAPITALIZED
