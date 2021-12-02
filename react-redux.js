// React Redux
  // https://react-redux.js.org/tutorials/quick-start
  // A UI binding library like React Redux handles the store interaction logic, so you don't have to write that code yourself.

// why use react redux?
  // React Redux implements many performance optimizations internally, so that your own component only re-renders when it actually needs to.

// setup command:
  npm install @reduxjs/toolkit react-redux 

// overview of setting up redux toolkit with react
    // 1. Create a Redux store with configureStore
        // configureStore accepts a reducer function as a named argument
        // configureStore automatically sets up the store with good default settings

    // 2. Provide the Redux store to the React application components
        // Put a React Redux <Provider> component around your <App />
        // Pass the Redux store as a prop: <Provider store={store.getState()}>

    // 3. Create a Redux "slice" reducer with createSlice
        // Call createSlice with a string name, an initial state, and named reducer functions
        // Reducer functions may "mutate" the state using Immer
        // Export the generated slice reducer and action creators

    // 4. Use the React Redux useSelector/useDispatch hooks in React components
        // Read data from the store with the useSelector hook
        // Get the dispatch function with the useDispatch hook, and dispatch actions as needed

  //example:

    import React from 'react';
    import ReactDOM from 'react-dom';
    import { createStore } from 'redux';

    // REDUX CODE
    ///////////////////////////////////

    const toggle = () => {
      return {type: 'toggle'} 
    }

    const initialState = 'off';
    const lightSwitchReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'toggle':
          return state === 'on' ? 'off' : 'on';
        default:
          return state; 
      }
    } 

    const store = createStore(lightSwitchReducer);

    // REACT CODE
    ///////////////////////////////////

    // Pass the store's current state as a prop to the LightSwitch component.
    const render = () => {
      ReactDOM.render(
        <LightSwitch 
          state={store.getState()}
        />,
        document.getElementById('root')
      )
    }

    render(); // Execute once to render with the initial state.
    store.subscribe(render); // Re-render in response to state changes.

    // Receive the store's state as a prop.
    function LightSwitch(props) {
      const state = props.state; 

      // Adjust the UI based on the store's current state.
      const bgColor = state === 'on' ? 'white' : 'black';
      const textColor = state === 'on' ? 'black' : 'white';  

      // The click handler dispatches an action to the store.
      const handleLightSwitchClick = () => {
        store.dispatch(toggle());
      }

      return (  
        <div style={{background : bgColor, color: textColor}}>
          <button onClick={handleLightSwitchClick}>
            {state}
          </button>
        </div>
      )
}
