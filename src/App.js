import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Posts } from "./Posts"
import { Post } from './Post'
import { Home } from "./Home"

export default function App() {
  /*
    note the path /posts/:id can be within this switch
    or nested within the child component posts

    if within App , the <Post /> component is rendered only
    if wihtin Posts component, both the Posts component and Post component is rendered
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
          <Route path="/posts/:id">
            <Post />
          </Route>
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
