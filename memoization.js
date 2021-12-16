// Memoization 
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
