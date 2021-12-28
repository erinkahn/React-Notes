// useLayoutEffect hook:
  // When measuring the layout of a page, visual changes to the DOM
  // It changes every render and replaces the previous render result with a new one
  // has dependencies [ ]


// Difference between useLayoutEffect and useEffect:
  // useLayoutEffect renders *BEFORE* the browser screen is painted (runs synchronously)
  // useEffect renders *AFTER* the browser screen is painted (runs asynchronously)


// use cases:
  // when you see flickering, you should use this instead of useEffect
  // maps, interfaces


// syntax:

    useLayoutEffect(() => {
      //do something
    }, [arrayDependency])
