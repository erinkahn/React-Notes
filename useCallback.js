// useCallback
    // does the same thing as useMemo, but without a function call
    // it returns a memoized (remembered/speedy/optimized) callback instead of a memoized (remembered/speedy/optimized) value
    // Memoization will remember and retrieve remembered values/states without recalculating / re-rendering the values again


// callback syntax

    //option to return a memoized value
    const callbackValue = useCallback(a + b, [a, b]) 
    
    // option to return a memozied callback
    const callbackFunction = useCallback(() => a + b, [a, b]) 

    
// example
    import useSearch from './fetch-items';

    function MyBigList({ term, onItemClick }) {    // onItemClick is memoized by the callback, as long as term is the same, the callback returns the same function object
      const items = useSearch(term);
      const map = item => <div onClick={onItemClick}>{item}</div>;
        
      return <div>{items.map(map)}</div>;
    }
    export default React.memo(MyBigList);



    import {useCallback} from 'react';

    export function MyParent({ term }) => {      // When MyParent re-renders, onItemClick function object remains the same and doesn't break the memoization of MyBigList.
        const doSomething = useCallback(event => {      // callback function will only re-render when value changes / not on every click
            console.log('you clicked', event.currentTarget)
        }, [term]

        return (
           <MyBigList
              term={term}
              onItemClick={onItemClick}   // trigger the callback when an action is performed or inside useEffect
            />
        )      
    }

    
// example
    
    const MemoizedLogout = React.memo(Logout);

    function MyApp({ store, cookies }) {
        
      const onLogout = useCallback(
        () => cookies.clear('session'), 
        [cookies]
      );
        
      return (
        <div className="main">
          <header>
            <MemoizedLogout
              username={store.username}
              onLogout={onLogout}
            />
          </header>
          {store.content}
        </div>
      );
    }
    
    
    
 // https://dmitripavlutin.com/dont-overuse-react-usecallback/
