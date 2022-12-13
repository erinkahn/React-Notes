// SOLID 
// https://konstantinlebedev.com/solid-in-react/


    // 1. single responsibility - every function should have only 1 responsibility
        // break large components that do too much into smaller components
        // extract code unrelated to the main component functionality into separate utility functions
        // encapsulate connected functionality into custom hooks

        // example: instead of writing a fetch call with useEffect inside a function component, make it a custom hook and import it 

        const MainComponent = () => {
          const {users} = useUsers() // custom hook imported makes it more readable and shorter!

          return (
            <ul>
            {users.filter(user => !user.isBanned && user.lastActivityAt >= 7).map(user =>
               <li key={user.id}>{user.fullName}</li>
            )}                                                                     
            </ul>
          )
        }

        // custom hook
        const useUsers = () => {
          const [users, setUsers] = useState([]);

          useEffect(() => {
            const loadUsers = async () => {
              const response = await fetch('/some-api');
              const data = await response.json();
              setUsers(data)
            }

            loadUsers()
          }, [])

          return {users}
        }


    // 2. open closed
      // software entities should be open for extension, but closed for modification
  

        
    // 3. liskov substitution
      //

        

    // 4. interface segregation
      //
        
        
        
        
        
        
        
        
        
        
        
        
        
        


    // dependency inversion

