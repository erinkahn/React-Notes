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

    const Notes = () => {
         const [notes, setNotes] = useState([]);
        
         const addNote = useCallback(() => {
               const newNote = "random";
               setNotes(n => [...n, newNote]);
         }, [setNotes];
        
         return (<>
               <Button addNote={addNote} />
               {notes.map((note, index) => (
                     <p key={index}>{note}</p>
               ))}
         </>);
    };

    const Button = ({ addNote }) => {
         console.log("Button re-rendered :( ");
        
         return (<>
               <button onClick={addNote}>Add</button>
         </>);
    };


    
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
