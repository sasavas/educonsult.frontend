import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Courses from "./Courses";
import SideMenu from "./components/SideMenu";

const App = () => {
  return (
    <div>
      <Router>
        {/* Make a nice looking side menu */}
        <SideMenu></SideMenu>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/courses" component={Courses}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </Router>
    </div>
  );
};

function Home() {
  return <h2>Home page</h2>;
}

function About() {
  return <h2>About page</h2>;
}

export default App;
