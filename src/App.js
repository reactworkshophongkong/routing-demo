import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Posts } from "./Posts"
import { Post } from './Post'
import { Home } from "./Home"

export default function App() {
  const linkStyles = {
    textDecoration: "none",
    marginRight: "5px"
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link style={linkStyles} to="/">
            Home
          </Link>
          <Link style={linkStyles} to="/posts">
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
