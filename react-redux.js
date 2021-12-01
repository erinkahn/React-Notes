// React Redux
  // https://react-redux.js.org/tutorials/quick-start
  // A UI binding library like React Redux handles the store interaction logic, so you don't have to write that code yourself.

// why use react redux?
  // React Redux implements many performance optimizations internally, so that your own component only re-renders when it actually needs to.
  
// steps to integrate redux with a UI:
  // 1. create redux store
  // 2. subscribe to updates
  // 3. inside the subscription callback you need to: 
        // a. get current store state
        // b. extract data needed by this piece of UI
        // c. update UI with the data
  // 4. if needed, render the UI with the initial state
  // 5. respond to UI inputs by dispatching Redux actions 


// overview of setting up redux toolkit with react
    // 1. Create a Redux store with configureStore
        // configureStore accepts a reducer function as a named argument
        // configureStore automatically sets up the store with good default settings
    // 2. Provide the Redux store to the React application components
        // Put a React Redux <Provider> component around your <App />
        // Pass the Redux store as <Provider store={store}>
    // 3. Create a Redux "slice" reducer with createSlice
        // Call createSlice with a string name, an initial state, and named reducer functions
        // Reducer functions may "mutate" the state using Immer
        // Export the generated slice reducer and action creators
    // 4. Use the React Redux useSelector/useDispatch hooks in React components
        // Read data from the store with the useSelector hook
        // Get the dispatch function with the useDispatch hook, and dispatch actions as needed


// setup: 
  npm install @reduxjs/toolkit react-redux 
