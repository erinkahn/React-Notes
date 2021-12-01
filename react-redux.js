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


// setup:
   // step 1 - setup environment
      npm install @reduxjs/toolkit react-redux 

   // step 2 - create a redux store
      // inside app/store.js
      import { configureStore } from '@reduxjs/toolkit' // this lets you inspect the store while coding 

      export default configureStore({
        reducer: {},
      })

   // step 3 - provide the redux store to react so it's available to our react components 
      // inside index.js
      import React from 'react'
      import ReactDOM from 'react-dom'
      import './index.css'
      import App from './App'
      import store from './app/store' 
      import { Provider } from 'react-redux' 

      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root')
      )
    
   // step 4 - create a redux state slice (initial state value, reducer function(s) for actions)
      // create new file named src/features/counter/counterSlice.js
      // import the createSlice API from redux
      import { createSlice } from '@reduxjs/toolkit'

      export const counterSlice = createSlice({
        name: 'counter', 
        initialState: {
          value: 0,
        },
        reducers: {
          increment: (state) => { // action
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
          },
          decrement: (state) => { // action
            state.value -= 1
          },
          incrementByAmount: (state, action) => { // action
            state.value += action.payload
          },
         },
      })

      // Action creators are generated for each case reducer function
      export const { increment, decrement, incrementByAmount } = counterSlice.actions
      export default counterSlice.reducer

   // step 5 - add slice reducer functions to the store 
      // inside app/store.js
      import { configureStore } from '@reduxjs/toolkit'
      import counterReducer from '../features/counter/counterSlice'

      export default configureStore({
        reducer: {
          counter: counterReducer, // tells the store to use this slice reducer function to handle all state updates
        },
      })
        
   // step 6 - use redux state and actions in react components
      // create a new file named src/features/counter/Counter.js
      // create a Counter component inside
      // use react redux hooks to let react components interact with the store
      // read data from the store by using useSelector
      // dispatch actions by using useDispatch
      import React from 'react'
      import { useSelector, useDispatch } from 'react-redux' // react redux hooks
      import { decrement, increment } from './counterSlice'  // actions
      import styles from './Counter.module.css'

      export function Counter() {
        const count = useSelector((state) => state.counter.value)  // read data
        const dispatch = useDispatch()  // dispatch actions

        return (
          <div>
            <div>
              <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}  // action
              >
                Increment
              </button>
              <span>{count}</span>  // state
              <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}  // action
              >
                Decrement
              </button>
            </div>
          </div>
        )
      }
      // import that Counter component inside App.js and render it inside of <App>


