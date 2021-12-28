// useMemo
  // used to speed / help performance and decrease the need to re-render
  // returns a memoized (remembered) value without re-rendering over and over
  // different from useCallback, it internalizes return values instead of entire functions
  // Rather than passing a handle to the same function, React skips the function and returns the previous result, until the parameters change.
  // Before the next render, if the new props are the same, React reuses the memoized result skipping the next rendering.


// syntax
  const memoizedResult = useMemo(() => expensiveComputation(a, b), [a, b])


// when to use
  // first write the calculation without useMemo and only add it if the original unmemoized component is causing performance issues
  // if your component is big, renders often and usually has the same props
  // The more often the component renders with the same props, the heavier and the more computationally expensive the output is, the more chances are that component needs to be wrapped in React.memo().


// example

    export function Movie({ title, releaseDate }) {
      return (
        <div>
          <MemoizedMovie title={title} releaseDate={releaseDate} /> // As long as title and releaseDate props are the same, React skips rendering MemoizedMovie. This improves the performance 
        </div>
      );
    }
    export const MemoizedMovie = React.memo(Movie); // React.memo(Movie) returns a new memoized component MemoizedMovie.

  
