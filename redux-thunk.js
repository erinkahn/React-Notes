// redux thunk
    // a redux tool that allows you to return functions rather than JUST actions
    // used mostly for handling asynchronous actions like using Axios to send a GET request
    // it allows you to dispatch actions asynchronously and resolve the promises returned


// step 1: installation:
    // redux needs to be installed already
    npm install redux-thunk --save


// step 2: add redux-thunk to your app using applyMiddleware()
    import { createStore, applyMiddleware } from 'redux';
    import thunk from 'redux-thunk';
    import rootReducer from './reducers/index';

    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );


// step 3: start dispatching actions asynchronously (actions happen independently of each other)
    // example: increment counter
    
    const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

    function increment() {
        return {
            type: INCREMENT_COUNTER
        };
    }

    function incrementAsync() { // happening asynchronously in the background
        return dispatch => {
            setTimeout(() => {
                dispatch(increment()); // You can invoke sync or async actions with `dispatch`
            }, 1000);
        };
    }


// step 4: setup success / failure actions 
    // example: get current user info

    const GET_CURRENT_USER = 'GET_CURRENT_USER';
    const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
    const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE';

    const getUser = () => {
        return (dispatch) => {  // nameless functions
            dispatch({ type: GET_CURRENT_USER }); // Initial action dispatched
            
            return axios.get('/api/auth/user').then(  // Return promise with success and failure actions
                user => dispatch({ type: GET_CURRENT_USER_SUCCESS, user }),
                err => dispatch({ type: GET_CURRENT_USER_FAILURE, err })
            );
        };
    };
