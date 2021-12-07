// React router 
   // - “React-router-dom”
   // - allows us to declaratively declare routes which will update the browser URL as we navigate through the app.
   
   import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

       <Router>
          <header>
            <Routes>
               <Route exact path='/'
                   element={<Home/>}> // go to homepage
               </Route>
               <Route exact path='/about'
                   element={<About/>}>   // route to about page
               </Route>
               <Route exact path='/resume'
                   element={<Resume/>}>    // go to resume page
               </Route>
           </Routes>

            <nav>
               <NavLink to="/">Home</NavLink>
               <NavLink to="/about">About</NavLink>
               <NavLink to="/resume">Resume</NavLink>
            </nav>
         </header>
      </Router>

   
   // 3 Hooks:
      // useParams - allows us to extract the parameters from the URL, such as an id or type.
      // useHistory - You can programmatically change the current route, which returns a method .push() with the string inside of the next route url
      // useLocation - returns the pathname of the currently active route
         // By combining useLocation() with useEffect(), you can run a piece of code whenever the user navigates to a new route.
      // useRouteMatch - returns the path where you currently are, matches it automatically
              <Link to={`${match.url}/details`}> /* or */ <Link to={`${match.path}/details`}>
