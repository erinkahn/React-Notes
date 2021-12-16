// Memoization 
  // stores the results of expensive function calls and returns the cached result when the same inputs occur again
  // caching, avoids re-rendering values that you already have by keeping only the most recent value of the input & result
  // if the value stays the same, then it remembers it and doesn't re-render it


// 3 APIS for memoization in react:
  // 1. memo
  // 2. useMemo
  // 3. useCallback

    // example:

      const MemoComp = React.memo(Comp) // memo
      const posts = React.useMemo(() => getPosts(searchTerm), [searchTerm]) // useMemo
      const launch = React.useCallback(() => launchCandy({type, distance}), [ 
        type,
        distance,
      ]) // useCallback

      
 // why memoize something?
    // 1. improve performance by avoiding re-rending components of functions
    // 2. value stability 

      
// when to use React.memo():
    // when your compoent is functional and has the same props that always return the same output
    // your component renders often
    // your compoenent is usually provided with the same props during re-rendering
    // your compoenent contains a large amount of UI elements 
    // the more computationally expensive the output is, the more chances are that component needs to be wrapped in React.memo().
    
      
// when to avoid using React.memo();
   // If the component isn't heavy and usually renders with different props, most likely you don't need it
      
      
// memo()
   // wraps a component 
   // renders a component and checks to see if new props are the same, and if so, it reuses the memoized props and skips the next rendering
   // improves performance

// useMemo()
   // will make dependencies stable and only change when you want something else to change
   // helps us preserve memoization characteristics for functions to work
      
      
// useCallback()
   // will only return a new function when the values change
   // helps us control when out side effect runs
 
      // example:
        
        const MemoizedLogout = React.memo(Logout); 

        function MyApp({ store, cookies }) {
          const onLogout = useCallback( // callback returns same function instance as long as cookies is the same
            () => cookies.clear('session'), 
            [cookies]
          );
          
          return (
            <div className="main">
              <header>
                <MemoizedLogout
                  username={store.username}
                  onLogout={onLogout} // callback
                />
              </header>
              {store.content}
            </div>
          );
        }
