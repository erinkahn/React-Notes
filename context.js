Context
A way to pass data thru the component tree w/o having to pass props down manually at every level
Context lets us pass a value deep into the component tree without explicitly threading it through every component which creates bloated code.

- When should I use this?
   when you have data or props that are global, meaning they need to be passed down to every component

Use cases:
current user profile details (id/image/bio), dark and light theme, preferred language, currency

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

React.createContext 
- creates a Context object
- when react renders a component that subscribes to this Context object, it will read the current context value from the closest matching Provider above it in the tree

   const MyContext = React.createContext(defaultValue);

   - the defaultValue arg is only used when a component does NOT have a matching Provider above it in the tree


Context.Provider
- every context object comes with a Provider React componenet that allows consuming compoenents to subscribe to context changes
- one Provider can be connected to many consumers. 
- Providers can be nested to override values depper within the tree

   <MyContext.Provider value={/* some value */}>
      
   - the Provider component accepts a value prop to be passed to consuming componenets that are descendants of this Provider. 
   - the consumers/descendants of a Provider will re-render whenever the Provider's value prop changes


Class.contextType
- the contextType property lets you consume the nearest current value of that Context type using this.context

   MyClass.contextType = MyContext;


Context.Consumer
-A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component.
- requires a function as a child which receives the current context value and returns a react node
- The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree. 
- If there is no Provider for this context above, the value argument will be equal to the defaultValue that was passed to createContext().

   <MyContext.Consumer>
      {value => /* render something based on the context value */}
   </MyContext.Consumer>


Context.displayName
- Context object accepts a displayName string property.

   const MyContext = React.createContext(/* some value */);
   MyContext.displayName = 'MyDisplayName';

   <MyContext.Provider> // "MyDisplayName.Provider" in DevTools
   <MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools
