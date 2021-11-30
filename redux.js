// REDUX
  // is a State management library that you can use to manage state in large and complicated applications.

  // Shared information is stored in A SINGLE OBJECT and not in components

// One way data flow: state > view > actions > … repeat
  // * The state holds the current data used by the app’s components.
  // * The view components display that state data.
  // * When a user interacts with the view, like clicking a button, the state will be updated in some way.
  // * The view is updated to display the new state.

// Redux helps SEPARATE the state, view and actions by requiring the state be managed by a SINGLE SOURCE

// ————

// ACTIONS
  // every action must have a TYPE property with a string value
  // an action can (optional) have a payload property that is related to the action
  // when the action is generated, it notifies other parts of the app which means it is DISPATCHED

// examples: 

  const state = [ 'Take Five', 'Claire de Lune', 'Respect' ];

  const addNewSong = {. // the action name
    type: 'songs/addSong',  // the action
    payload: 'Halo'  // info about the action
  }

  const removeSong = {
    type: 'songs/removeSong',
    payload: 'Take Five'
  }

  const removeAll = {
    type: 'songs/removeAll',
  }
  
// ____

// REDUCERS
// how the actions above carried out in JS
  
// ** rules of reducers
//   1. they should only calculate the new state value based on the state and action args
//   2. They are not allowed to modify the existing state. They must make immutable updates, by copying the existing state and making changes to the copied values like [...state].
//   3. they should not do any asynchronous logic or other 'side effects' like (log a value to console, make AZAX HTTP request, mody some state existing outside of function, generate random numbers)

- immutably - the reducer function doesn’t change, or mutate, the arguments, it makes a copy
  
// Reducer function
  // defines how the current state and action are used together to create a new state

// example: 

  const initialState = [ 'Print trail map', 'Pack snacks', 'Summit the mountain' ];
 
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {   // checking what kind of action
      case 'todos/addTodo': {   // if you add a to do, state changes
        return [ ...state, action.payload];  //copy the current state and any changed values into a new object
      }
      case 'todos/removeAll': {  // if you remove all to dos, state changes to empty
        return [];  
      }
      default: {    // if no state is provided, it returns the default state
        return state;
      }
    }
  }
  

// Actions and Reducer functions combined example:

    const initialState = [ 'Take Five', 'Claire de Lune', 'Respect' ];

    const addNewSong = {
      type: 'songs/addSong',
      payload: 'Halo'
    };

    const removeSong = {
      type: 'songs/removeSong',
      payload: 'Take Five'
    };

    const removeAll = {
      type: 'songs/removeAll'
    }

    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case 'songs/addSong' : {
          return [...state, addNewSong.payload] // adds halo
        }
        case 'songs/removeSong' : {
          return state.filter(song => song !== removeSong.payload) // removes respect
        }
        case 'songs/removeAll' : {
          return []
        }
        default: {
          return state;
        }
      }
    }
  
    
    
// another example:

    const todoReducer = (state = [], action) => {
     switch (action.type) {
       case 'todos/addTodo': {
         return [...state, action.payload]
       }
       case 'todos/removeAll': {
         return [];
       }
       default: {
         return state;
       }
     }
    }

    // Example call to reducer
    const state = [ 'Print trail map', 'Pack snacks', 'Summit the mountain' ];
    const addTodoAction = { type: 'todos/addTodo', payload: 'Descend' };
    const newState = todoReducer(state, addTodoAction);
