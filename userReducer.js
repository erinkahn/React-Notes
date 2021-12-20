// useReducer
    // lets you separate state management from the rendering logic of the component
    // lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks
    // an alternative to useState, it takes 2 arguments: useReducer(reducerFunction, initialState). 


// reducer
    // accepts the current state and action object reducer(state, action) => newState
    // it then returns an array of 2 items: the current state and the dispatch function
    // action object -> dispatch -> reducer -> state

        const [state, dispatchFunction] = useReducer(reducerFunction, initialState);
        
        function reducer(state, action) => newState

        
// dispatch
    // When you'd like to update the state, call dispatch(action) with the appropriate action object. 
    // The action object is then forwarded to the reducer() function that updates the state.
    // If the state has been updated by the reducer, then the component re-renders, and [state, ...] = useReducer(...) hook returns the new state value.

        
// when to use it?
    // when you're managing 2,3 or more states that involves multiple sub-values or when the next state depends on the previous one
    // when using an event handler or after completing a fetch request, you simply call the dispatch function with the appropritate action object: dispatch(actionObject)

        
// example: 

    import { useReducer } from 'react';

    function MyComponent() {
      const [state, dispatchFunction] = useReducer(reducer, {counter: 0); // dispatches the state object (initial state is zero)

      const action = {  // how to update the state
        type: 'increase'  // action = increase the counter,                                                    
      };

      return (
        <button onClick={() => dispatch(action)}> Click to Increase </button>
      );
    }


    // reducer function
    function reducer(state, action) => {
        let newState;  // does not mutate/modify the state, but creates a new state object, then returns it.
        switch (action.type) { // if action happens and state changes, then set state to increase or decrease value
            case: 'increase' :
                newState = {counter: state.counter + 1};
                break;
            case: 'decrease' :
                newState = {counter: state.counter - 1};
                break;
            default:
                throw new Error();
        }
        return newState;
     }


// example: https://codesandbox.io/s/userreducer-hook-myz9b?file=/src/Stopwatch.js
    
  
