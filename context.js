Context
A way to pass data thru the component tree w/o having to pass props down manually at every level
Context lets us pass a value deep into the component tree without explicitly threading it through every component.

- When should I use this?
   when you have data or props that are global, meaning they need to be passed down to every component

Use cases:
current user, dark and light theme, preferred language

component composition:
- if you ONLY want to avoid passing some props thru many levels, then you should use **component composition** which is simpler than context
    - if you pass down props thru many levels and in the end only 1 component really needs it, then you should pass down the component itself so that the components in between DONT need to know about those props
    - with this method, it makes your code cleaner by reducing the props amount you need to pass thru your app and gives more control to your root components
    - in some cases, using this is not the right choice andd makes compoenents higher in the tree more complicated

Example: using a theme to change from dark to light
- Different parts of the theme will be required by nearly all components and an option to change the current theme will be needed.
- So instead of using props for all parent to child components, we can use this which is quicker 
- Creating the context for the theme:
    - Create context returns an object with a Provider component as a member
    - This provider takes a prop, value
    - The children prop means it can wrap any component and any component inside the tree wrapped with this component will have access to the context provided by it
- the code:
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}

React context API
A state management library API used for React 
- Uses the createContext function to define the context
- Uses a Provider component to wrap the component tree with which requires access to the context
- Either consumer or context or useContext can be used to access the state
    - Consumer component
    - Context class member
    - useContext hook 
    
