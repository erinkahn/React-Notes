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

// Q: how are the actions above carried out in JS?
// A: with a REDUCER

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
