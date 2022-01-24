// React Redux
  // https://react-redux.js.org/tutorials/quick-start
  // A UI binding library like React Redux handles the store interaction logic, so you don't have to write that code yourself.


// why use react redux?
  // React Redux implements many performance optimizations internally, so that your own component only re-renders when it actually needs to


// when to use it?
  // when apps have many features and a lot of data where it could benefit from having a centralized store to keep it all organized. 
  // you should use Redux when you have a large application that has many states that change
  // you should NOT use Redux when you have smaller apps or larger apps that only have a few states that don't change much - because using Context can take care of this


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


          // example:
             // 1. create redux store
                // inside src/ create a folder called app/ and inside that create a file called store.js
                  import { configureStore } from '@reduxjs/toolkit'

                  export default configureStore({
                    reducer: {},
                  })


              // 2. make store available to react components 
                 // inside main index.js
                  import React from 'react'
                  import ReactDOM from 'react-dom'
                  import './index.css'
                  import App from './App'
                  import store from './app/store'
                  import { Provider } from 'react-redux' // wraps our app

                  ReactDOM.render(
                    <Provider store={store}>    // our store as a prop 
                      <App />
                    </Provider>,
                    document.getElementById('root')
                  )
              
                  
               // 3. create a redux state slice
                  // inside src/ create a folder called /features and inside that create a folder called /counter 
                  // then create a file called counterSlice.js inside the /counter folder
                    import { createSlice } from '@reduxjs/toolkit'

                    export const counterSlice = createSlice({
                      name: 'counter',
                      initialState: {
                        value: 0,
                      },
                      reducers: {
                        increment: (state) => {
                          // Redux Toolkit allows us to write "mutating" logic in reducers. It
                          // doesn't actually mutate the state because it uses the Immer library,
                          // which detects changes to a "draft state" and produces a brand new
                          // immutable state based off those changes
                          state.value += 1
                        },
                        decrement: (state) => {
                          state.value -= 1
                        },
                        incrementByAmount: (state, action) => {
                          state.value += action.payload
                        },
                      },
                    })

                    // Action creators are generated for each case reducer function
                    export const { increment, decrement, incrementByAmount } = counterSlice.actions
                    export default counterSlice.reducer


              // 4. add slice reducers to store
                // inside app/store.js import the reducer function from the counter slice to handle all updates to the state
                    import counterReducer from '../features/counter/counterSlice';

                    export default configureStore({
                      reducer: {
                        counter: counterReducer,
                      },
                    })

  
              //5. use redux state and actions in react components
                // inside src create a /features/counter/Counter.js
                    import React from 'react'
                    import { useSelector, useDispatch } from 'react-redux'
                    import { decrement, increment } from './counterSlice'

                    export function Counter() {
                      const count = useSelector((state) => state.counter.value)
                      const dispatch = useDispatch()

                      return (
                        <div>
                          <div>
                            <button
                              aria-label="Increment value"
                              onClick={() => dispatch(increment())}
                            >
                              Increment
                            </button>
                            <span>{count}</span>
                            <button
                              aria-label="Decrement value"
                              onClick={() => dispatch(decrement())}
                            >
                              Decrement
                            </button>
                          </div>
                        </div>
                      )
                    }
                    
                //6. import & render Counter compoenet inside App.s
                  import Counter from './features/counter/Counter.js';

                  function App() {
                   return (
                     <Counter/>
                     )
                  }
              



          // example

              import React from 'react';
              import ReactDOM from 'react-dom';
              import { createStore } from 'redux';

              // REDUX CODE
              ///////////////////////////////////

              const increment = () => {
                return {type: 'increment'} 
              }

              const decrement = () => { 
                return {type: 'decrement'}
              }

              const initialState = 0;
              const counterReducer = (state = initialState, action) => {
                switch (action.type) {
                  case 'increment':
                    return state + 1;
                  case 'decrement':
                    return state - 1;
                  default:
                    return state; 
                }
              } 

              const store = createStore(counterReducer);

              // REACT CODE
              ///////////////////////////////////

              const render = () => {
                ReactDOM.render(
                  <CounterApp 
                    state={store.getState()}
                  />,
                  document.getElementById('root')
                )
              }


              // Render once with the initial state.
              render()

              // Subscribe render to changes to the store's state.

              function CounterApp(props) {
                let state = props.state;

                const onIncrementButtonClicked = () => {
                  // Dispatch an 'increment' action.
                  store.dispatch(increment())
                }

                const onDecrementButtonClicked = () => {
                  // Dispatch an 'decrement' action.
                  store.dispatch(decrement())
                }

                return (   
                  <div id='counter-app'>
                    <h1> {state} </h1>
                    <button onClick={onIncrementButtonClicked}>+</button> 
                    <button onClick={onDecrementButtonClicked}>-</button>
                  </div>
                )
              }
              
              // re-render the component every time the state changes
              store.subscribe(render)


        // 9 steps completed:
          // 1. Install the redux library into your project using npm install redux.
          // 2. Import the createStore() helper function from the 'redux' library.
          // 3. Create a store object that holds the entire state of your Redux application using createStore().
          // 4. Get the current state of the store using store.getState() as a prop
          // 5. Dispatch actions to the store using store.dispatch(action).
          // 6. Create action creators/functions to reduce the repetitive creation of action objects.
          // 7. Register a change listener function to respond to changes to the store using store.subscribe(listener).
          // 8. Recognize the pattern for connecting Redux to any user interface.
          // 9. Implement a Redux application using either the HTML DOM API or React.


// more complex state example:  https://codesandbox.io/s/redux-recipes-app-phzud


