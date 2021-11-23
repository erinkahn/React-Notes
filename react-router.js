React router 
- “React-router-dom”
- allows us to declaratively declare routes which will update the browser URL as we navigate through the app.
- Exports: BrowserRouter, Route, Switch, Link, and NavLink
- 3 Hooks:
    * useParams - allows us to extract the parameters from the URL, such as an id or type.
    * useHistory - You can programmatically change the current route, which returns a method .push() with the string inside of the next route url
    * useLocation - returns the pathname of the currently active route
        * By combining useLocation() with useEffect(), you can run a piece of code whenever the user navigates to a new route.
    * useRouteMatch - returns the path where you currently are, matches it automatically
        * <Link to={`${match.url}/details`}> or <Link to={`${match.path}/details`}>
