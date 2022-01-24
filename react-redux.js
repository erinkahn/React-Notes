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
  npm install redux
  npm install react-redux
  npm install redux-devtools-extension


// steps
  // Create a Redux store
  // Subscribe to updates
  // Inside the subscription callback:
      // Get the current store state
      // Extract the data needed by this piece of UI
      // Update the UI with the data
  // If necessary, render the UI with initial state
  // Respond to UI inputs by dispatching Redux actions



// 1. store (where all the state will live)
  // inside main index.js
    import { createStore } from "redux";
    import { Provider } from "react-redux";
    import { composeWithDevTools } from "redux-devtools-extension";

    import rootReducer from "./reducers"; // folder of reducers

    const store = createStore(  
      rootReducer,  
      { itemActions: { favourites: [] } }, // sets initial state 
      composeWithDevTools() // makes debugging through Redux Dev Tools possible
    );

    const rootElement = document.getElementById("root");

    // Replace your existing ReactDOM.render() with below
    ReactDOM.render(&ltProvider store={store}&gt&ltApp /&gt&lt/Provider&gt, rootElement);


// 2. action creators 
  // inside src/ create an actions/ folder, then create a new file inside that called index.js
    import { MARK_FAVOURITE, REMOVE_FAVOURITE } from "../constants/ActionTypes";

    export const markFavourite = name => ({
      type: MARK_FAVOURITE, // mandatory key
      name // payload (additional data u need to update in store)
    });

    export const removeFavourite = name => ({
      type: REMOVE_FAVOURITE, // mandatory key
      name // payload (additional data u need to update in store)
    });


// 3. reducer
  // inside src/ create a reducers/ folder, then create a reducer file inside that called itemActions.js
    const itemActions = (state = {favourites: []}, action) => { // initialstate, action reducer will interpret
      switch (action.type) { // what code should be executed for the action type
        case "MARK_FAVOURITE":
          return {
            ...state, // copy of state
            favourites: [...state.favourites, action.name] // copy favorites, add new item to the new favorites object
          };
        case "REMOVE_FAVOURITE":
          const favourites = state.favourites.filter(item => item !== action.name);
          return {
            ...state, // copy of state
            favourites  // initial favorites (one being removed by filter method)
          };
        default:
          return state;
      }
    };

    export default itemActions;


// 5. combine reducers
  // inside reducers/ create a file called index.js
    import { combineReducers } from "redux";
    import itemActions from "./itemActions";

    export default combineReducers({
      itemActions
    });


// 6. invoke action creators & access state
    import { connect } from "react-redux";  // provides access to store and action creators
    import { markFavourite, removeFavourite } from "../actions";

    class ItemList extends React.Component {
      // component code here

      // action creators are now available in the props
      updateFavourites = name => {
        return this.props.favourites.find(item => item === name)
          ? this.props.removeFavourite(name)
          : this.props.markFavourite(name);
      };
    }

    const mapStateToProps = state => ({
      favourites: state.itemActions.favourites
    });

    export default connect(
      mapStateToProps, 
      { markFavourite, removeFavourite }  // state & props received from parent component
    )(ItemList);  // our action creator object






