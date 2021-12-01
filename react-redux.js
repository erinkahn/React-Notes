// React Redux
  // https://react-redux.js.org/tutorials/quick-start

  // redux is a standalone library that can be used with any framework like Vue, React, Vanilla JS...
  // redux is separate from react so you use a UI binding library (react redux) to tie them together
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
