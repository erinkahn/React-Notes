REDUX
is a State management library that you can use to manage state in large and complicated applications.

Shared information is stored in A SINGLE OBJECT and not in components

One way data flow: state > view > actions > … repeat
* The state holds the current data used by the app’s components.
* The view components display that state data.
* When a user interacts with the view, like clicking a button, the state will be updated in some way.
* The view is updated to display the new state.

Redux helps SEPARATE the state, view and actions by requiring the state be managed by a SINGLE SOURCE

————


example: 

	const state = [ 'Take Five', 'Claire de Lune', 'Respect' ];

  const action = {
    type: 'todos/addTodo',   - string value
    payload: 'Take selfies'   - info related to the action (todo text)
  };
