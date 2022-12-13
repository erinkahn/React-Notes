// SOLID 
// https://konstantinlebedev.com/solid-in-react/


    // 1. single responsibility - keep components small and single purpose
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


    // 2. open closed - components should be extendable, without changing original source code
      
        // example: a header component is global/used on multiple pages but has a different UI depending on the page it's on
            // use component composition ({children}) for this so in the future if you add more pages, it's less work/tightly coupled to the context it's used in
        
        // WRONG APPROACH:
            const Header = () => {
                const {pathname} = useRouter()

                return (
                    <header>
                        <Actions>
                            {pathname === '/dashboard' && <Link to="/events/new">New Event</Link>}
                            {pathname === '/' && <Link to="/dashboard">Go to Dash</Link>}
                        </Actions>
                    </header>
                )
            }
            const HomePage = () => {
                <Header/>
                <HomeStuff/>
            }
            const DashboardPage = () => {
                <Header/>
                <DashboardStuff/>
            }

        // RIGHT APPROACH:
            // With this approach, we completely remove the variable logic that we had inside of the Header and now can use composition to put there literally anything we want without modifying the component itself. 
            // A good way of thinking about it is that we provide a placeholder in the component that we can plug into. 
            
            const Header = ({children}) => {
                const {pathname} = useRouter()

                return (
                    <header>
                        <Actions>
                            {children}
                        </Actions>
                    </header>
                )
            }
            const HomePage = () => {
                <Header>
                  <Link to="/dashboard">Go to Dash</Link>
                <Header/>
                <HomeStuff/>
            }
            const DashboardPage = () => {
                <Header>
                  <Link to="/events/new">New Event</Link>
                <Header/>
                <DashboardStuff/>
            }
        

        
    // 3. liskov substitution
      //

        

    // 4. interface segregation
      //
        
        
        
        
        
        
        
        
        
        
        
        
        
        


    // dependency inversion

