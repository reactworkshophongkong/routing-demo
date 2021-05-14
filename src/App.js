import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Posts } from "./Posts"
import { Post } from './Post'
import { Home } from "./Home"

export default function App() {
    /* Todo lets extend the app
    1) Create a new Route to serve component Users , 
      data can be fetched from /profile

    2) Extend app and display Comments within Post component
    data can be fetched from post/:id/comments
  */

  return (
    <Router>
      <div className="App">
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/posts">
            Posts
          </Link>
        </nav>
        <Switch>
          {/* <Route path="/posts/:id">
            <Post />
          </Route> */}
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
