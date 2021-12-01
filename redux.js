// REDUX
  // is a State management library that you can use to manage state in large and complicated applications.
  // redux is a standalone library that can be used with any framework like Vue, React, Vanilla JS...
  // redux is separate from react so you use a UI binding library (react redux) to tie them together

  // Shared information is stored in A SINGLE OBJECT and not in components

// One way data flow: state > view > actions > … repeat
  // * The state holds the current data used by the app’s components.
  // * The view components display that state data.
  // * When a user interacts with the view, like clicking a button, the state will be updated in some way.
  // * The view is updated to display the new state.

// Redux helps SEPARATE the state, view and actions by requiring the state be managed by a SINGLE SOURCE


// -------


// ACTION
  // a JS object that describes what happened to the state (describes the action)
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
  
  
// -------

  
// REDUCER
  // a function that ties state and actions together
  // determines the next state given a current state and action
  
// ** rules of reducers
//   1. they should only calculate the new state value based on the state and action args
//   2. They are not allowed to modify the existing state. They must make immutable updates, by copying the existing state and making changes to the copied values like [...state].
//   3. they should not do any asynchronous logic or other 'side effects' like (log a value to console, make AZAX HTTP request, mody some state existing outside of function, generate random numbers)

// immutably - the reducer function doesn’t change, or mutate, the arguments, it makes a copy

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


// -------


// pure functions - important to have
  // when methods are moved OUTSIDE of functions rather than inside

    //example
        let item;
        fetch('https://anything.com/endpoint')  // method is outside
          .then(response => {
            if (!response.ok) {
              item = {};
            }

            item = response.json();
         });

        const addItemToList = (list, item) => {  // function
            return [...list, item];
        };


    // example using SLICE 
      // (moving slice outside function, removing the 1st index in the array of a,b,c,d)

      // before: (impure function / incorrect)
        const removeItemAtIndex = (list, index) => {
         list.slice(index, 1);
         return list;
        };
        console.log(removeItemAtIndex(['a', 'b', 'c', 'd'], 1));


      // after: (pure function)
        const removeItemAtIndex = (list, index) => {
          return [
            ...list.slice(0, index),  // start at 0 and move 1 (the index) to the right 
            ...list.slice(index+1, list.length)   // index is now 1...so + 1 is 2, the length of the list is 4 
                                                  // move 1, 2 to the right out of 4 items == b
          ]
        };
        console.log(removeItemAtIndex(['a', 'b', 'c', 'd'], 1)); // returns ['a', 'c', 'd']


// -------


// STORE
  // a container for state
  // receives actions and calls the reducer function with the action and current state
  // https://www.codecademy.com/learn/learn-redux/modules/core-redux-api/cheatsheet

  // store data flow:
  // 1. The store initializes the state with a default value.
  // 2. The view displays that state.
  // 3. When a user interacts with the view, like clicking a button, an action is dispatched to the store.
  // 4. The dispatched action and the current state are combined in the store’s reducer to determine the next state.
  // 5. The view is updated to display the new state.

  // creating a redux store
    const store = createStore(theReducerFunction) // creates and returns a store object that holds the complete state tree of an app
      // the required argument is a reducer function, which is called each time an action is dispatched

    // 3 store methods that make sure actions and states are updated
      store.getState()            // get the state
      store.dispatch(action)      // change the state 
      store.subscribe(listener)   // adds a callback function to a list of store callbacks. so when the state changes, all of the listener callbacks get executed

    // slices - relatable parts that are specific to data/actions inside the store's state
    // slice reducer - the reducer that handles actions + updates data for a given slice(relatable part)
      
  // store example:
    import { createStore } from 'redux'
 
    const initialState = 'on';
    const lightSwitchReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'toggle':
          return state === 'on' ? 'off' : 'on';
        default:
          return state;
      }
    }

    const store = createStore(lightSwitchReducer); //calling the reducer function & setting it to store variable

    console.log(store.getState());  // prints 'on' 
    store.dispatch({type: 'toggle}) // update the state
    console.log(store.getState());   // prints 'off'

  // SUBSCRIBE - respond to state changes
    // subscribe a change listener to print out the current state in response to state changes automatically.
    
    // example:
        const reactToChange = () => { // listener function is subscribed to the store
          console.log('the light was' , ${store.getState()}) // print state value when function is called
        }
        const unsubscribe = store.subscribe(reactToChange) // causes reactToChange function NOT to execute
        store.dispatch(toggle())
        unsubscribe() // reactToChange is now unsubscribed
        
           
        
        
        
        
        
