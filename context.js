Context
A way to pass data thru the component tree w/o having to pass props down manually at every level
Context lets us pass a value deep into the component tree without explicitly threading it through every component which creates bloated code.

- When should I use this?
   when you have data or props that are global, meaning they need to be passed down to every component

Use cases:
current user profile details (id/image/bio), dark and light theme, preferred language, currency

Example: using a theme to change from dark to light
- Different parts of the theme will be required by nearly all components and an option to change the current theme will be needed.
- So instead of using props for all parent to child components, we can use this which is quicker 
- Creating the context for the theme:
    - Create context returns an object with a Provider component as a member
    - This provider takes a prop, value
    - The children prop means it can wrap any component and any component inside the tree wrapped with this component will have access to the context provided by it

- the code:

// Create a context for the current theme (with "light" as the default).

   import React, {createContext} from 'react;

   const ThemeContext = React.createContext('light');

   function App {
       // Use a Provider to pass the current theme to the tree below.
       // Any component can read it, no matter how deep it is.
       // In this example, we're passing "dark" as the current value.
       return (
         <ThemeContext.Provider value="dark">
           <Toolbar />
         </ThemeContext.Provider>
       );
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




Steps for creating a context:
1 Create the context
2 Create the provider for that context
3 Export the context & the provider.
- The provider will wrap our components and provide them with the value (some global data).


React.createContext 
- creates a Context object
- when react renders a component that subscribes to this Context object, it will read the current context value from the closest matching Provider above it in the tree

   const MyContextVariableName = React.createContext(defaultValue);

   - the defaultValue arg is only used when a component does NOT have a matching Provider above it in the tree


Context.Provider
- every context object needs a Provider which will provide the data to the context

   <MyContext.Provider value={/* some value */}>
      
   - the Provider component accepts a value prop to be passed to consuming componenets that are descendants of this Provider. 
   - the consumers/descendants of a Provider will re-render whenever the Provider's value prop changes

   example:
      import React, {createContext} from "react";

      const ThemeContext = createContext();

      function ThemeProvider(props) {
        const theme = "dark";

        return (
          <ThemeContext.Provider value={theme}>  // the value that all the childern will be able to receive
            {props.children}             
          </ThemeContext.Provider>
        );
      };
      export { ThemeContext, ThemeProvider };

      //this provider will wrap our <App /> component and give it the value="dark" so that we can read the theme from any component.



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
