// useReducer
    // it extracts the state management out of a component and handles it separately
    // lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks
    // an alternative to useState, it takes 2 arguments: useReducer(reducerFunction, initialState). 


// reducer
    // accepts the current state and action object reducer(state, action) => newState
    // it then returns an array of 2 items: the current state and the dispatch function
    // action object -> dispatch -> reducer -> state

        const [state, dispatchFunction] = useReducer(reducer, initialState);
        
        function reducer(state, action) => newState


// when to use it?
    // when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one
    // when using an event handler or after completing a fetch request, you simply call the dispatch function with the appropritate action object: dispatch(actionObject)

    // example:

        import { useReducer } from 'react';

        function MyComponent() {
          const [state, dispatchFunction] = useReducer(reducer, {counter: 0); // dispatches the state object (initial state is zero)
            
          const action = { // how to update the state
            type: 'increase' // action = increase the counter,
                                                                 
            user: { // extra info used by the reducer
                 name: 'John Smith',
                 email: 'johnsmith@gmail.com'                                                
            }                                                     
          };
            
          return (
            <button onClick={() => dispatch(action)}> Click me </button>
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
