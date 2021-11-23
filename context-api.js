React context API
A state management library API used for React 
- Uses the createContext function to define the context
- Uses a Provider component to wrap the component tree with which requires access to the context
- Either consumer or context or useContext can be used to access the state
    - Consumer component
    - Context class member
    - useContext hook  
- When should I use this?

Example: using a theme to change from dark to light
- Different parts of the theme will be required by nearly all components and an option to change the current theme will be needed.
- So instead of using props for all parent to child components, we can use this which is quicker 
- Creating the context for the theme:
￼
- Create context returns an object with a Provider component as a member
- This provider takes a prop, value
￼
- The children prop means it can wrap any component and any component inside the tree wrapped with this component will have access to the context provided by it
- Using the hook: 
￼

article:
https://app.pluralsight.com/guides/react-context-api

