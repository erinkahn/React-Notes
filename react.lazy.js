React.lazy + <Suspense/>
- If a component is a very large component (that loads several libraries) and is only used by a small portion of the users, it is wise to lazy load it (only load it when it's used) to improve performance

example:
usage would be and Admin component (logged in) - bc some people don’t want to log in or are not admins at all

——- Step 1: lazy load

Instead of :
Import Admin from ‘./Admin.js’;

write :
const Admin = React.lazy(function() {
    return import("./Admin.js");      // returns promise of import()
});

Or a shorter way:
const Admin = React.lazy(() => import("./Admin.js"));


—— Step 2: wrap with suspense component

- The Suspense component wraps lazy-loaded components and allows you to render intermediary (loading) content until the component has loaded.

import React, {Suspense} from "react";
import {render} from "react-dom";
const Admin = React.lazy(() => import("./Admin.js"));

function User(props) {
    return (<>
        <p>User details show up here</p>
        {props.isAdmin && <Suspense>
            <Admin />
        </Suspense>}
    </>);
}


—— Step 3: provide intermediary/fallback content 

- define what content React will render while the component is loading (while the import() call is going to the network and fetching the file) - provided by a fallback prop to the Suspense component

Example 1:
<Suspense fallback={<div>Loading admin...</div>}>
    <Admin />
</Suspense>


Example 2 :
<Suspense fallback={<CircleSpinner />}>
    <Admin />
</Suspense>


Instead of :
import React, {Suspense} from "react";
import {render} from "react-dom";
import Admin from "./Admin.js";

function User(props) {
    return (<>
        <p>User details show up here</p>
        {props.isAdmin && <Admin />}
    </>);
}


Write :
import React, {Suspense} from "react";
import {render} from "react-dom";
const Admin = React.lazy(() => import("./Admin.js"));

function User(props) {
    return (<>
        <p>User details show up here</p>
        {props.isAdmin && <Suspense fallback={<div>Loading admin...</div>}>
            <Admin />
        </Suspense>}
    </>);
}


*** Do not lazy load every single component. This will make your app slower. Generally, try to lazy load components that are very large and that do not show up immediately above the fold.
