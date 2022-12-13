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
        

        
   // 3. liskov substitution - subtype,supertype relationship (inheritance), basing one component on another while retaining similar implementation
        
        // example 1: StyledButton component is created based on the Button component 
            // new css classes are added but it retains the original implementation of the Button so the Button and StyledButton are supertype and subtype components
                  
            import styled from 'styled-components';
                
            const Button = (props) => { ... }
            const StyledButton = styled(Button)`
                border: 1px solid red;
                border-radius: 5px;
            `
            
            const App = () => {
                return <StyledButton onClick={handleClick}/>
            }

        // example 2: use the original props that a component expects rather than redefine the props and pass them down through the spread operator
            
            // WRONG APPROACH:
            type Props = { value: string; onChange: () => void } 
            const CustomInput = ({ value, onChange }: Props) => { // redefined props
               ...
              return <input value={value} onChange={onChange} />
            }
              
            // RIGHT APPROACH:
            type Props = InputHTMLAttributes<HTMLInputElement>
            const CustomInput = (props: Props) => { // original props
              ...
              return <input {...props} /> // spread operator
            }
            
            

   // 4. interface segregation - components should NOT depend on props they DON'T use
        // minimize dependencies between components in order to be more reusable and less coupled
        
            // example: 
            
                // list of videos are rendered in the app
                type Video = {
                  title: string
                  duration: number
                  coverUrl: string
                }
                type Props = {
                  items: Array<Video>
                }
                const VideoList = ({ items }) => {
                  return (
                    <ul>
                      {items.map(item => 
                        <Thumbnail 
                          key={item.title} 
                          video={item} 
                        />
                      )}
                    </ul>
                  )
                }
            
                // WRONG APPROACH:           
                    // thumbnail component expects full video to be passed as props but only using one of its properties
                    // could cause problems if we display thumbnails for live streams as well with both medias mixed in the same list
                    type Props = {
                      video: Video
                    }
                    const Thumbnail = ({ video }: Props) => {
                      return <img src={video.coverUrl} />
                    }

                    // new live stream object            
                    type LiveStream = {
                      name: string
                      previewUrl: string
                    }

                    // can't pass live scream to thumbnail bc video and livestream arent compatible/diff types 
                    // and thumbnail url calls it 'coverUrl' whie live stream calls it 'previewUrl'
                    type Props = {
                      items: Array<Video | LiveStream>
                    }
                    const VideoList = ({ items }) => {
                      return (
                        <ul>
                          {items.map(item => {
                            if ('coverUrl' in item) {
                              // it's a video
                              return <Thumbnail video={item} />
                            } else {
                              // it's a live stream, but what can we do with it?
                            }
                          })}
                        </ul>
                      )
                    }
                
                // RIGHT APPROACH:
                    // refactor thumbnail component to make sure it relies only on props required
                    type Props = {
                      //video: Video
                      coverUrl: string
                    }
                    const Thumbnail = ({ coverUrl }: Props) => { // take out video
                      //return <img src={video.coverUrl}/>
                      return <img src={coverUrl} />
                    }
                      
                    // refactor VideoList component to render thumbnails of both video and live stream
                    type Props = {
                      items: Array<Video | LiveStream>
                    }
                    const VideoList = ({ items }) => {
                      return (
                        <ul>
                          {items.map(item => {
                            if ('coverUrl' in item) {
                              // it's a video
                              // return <Thumbnail video={item />
                              return <Thumbnail coverUrl={item.coverUrl} />
                            } else {
                              // it's a live stream
                              return <Thumbnail coverUrl={item.previewUrl} />
                            }
                          })}
                        </ul>
                      )
                    }
        
                        

    // 5. dependency inversion - one component should NOT directly depend on another, but they both should depend on some COMMON ABSTRACTION
        // minimize coupling/dependencies between different components
        
        // example: 
            // WRONG APPROACH:
                import api from '~/common/api' // tight coupling / dependency will effect other components if changed
                const LoginForm = () => {
                  const [email, setEmail] = useState('')
                  const [password, setPassword] = useState('')
                  const handleSubmit = async (evt) => {
                    evt.preventDefault()
                    await api.login(email, password)
                  }
                  return (
                    <form onSubmit={handleSubmit}>
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                      <button type="submit">Log in</button>
                    </form>
                  )
                }

            //RIGHT APPROACH: 
                // use props to inject functionality rather than have the form depend on the api module
                type Props = {
                  onSubmit: (email: string, password: string) => Promise<void>
                }
                const LoginForm = ({ onSubmit }: Props) => {
                  const [email, setEmail] = useState('')
                  const [password, setPassword] = useState('')
                  const handleSubmit = async (evt) => {
                    evt.preventDefault()
                    await onSubmit(email, password)
                  }
                  return (
                    ...
                  )
                }
                
                // create connected version of the form that will delegate form submission logic to the api module
                // this servves as the glue betwteen the api and LoginForm while they can remain fully independent of e/o  
                import api from '~/common/api'
                const ConnectedLoginForm = () => {
                  const handleSubmit = async (email, password) => {
                    await api.login(email, password)
                  }
                  return (
                    <LoginForm onSubmit={handleSubmit} />
                  )
                }
                        
