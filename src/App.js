import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Courses from "./Courses";
import SideMenu from "./components/SideMenu";
import Students from "./components/Students";

const App = () => {
  return (
    <div>
      <Router>
        <SideMenu></SideMenu>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/courses" component={Courses}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/students" component={Students}></Route>
        </Switch>
      </Router>
    </div>
  );
};

function Home() {
  return (
    <div id="main">
      <h2>Home page</h2>
    </div>
  );
}

function About() {
  return (
    <div id="main">
      <h2>About page</h2>
    </div>
  );
}

export default App;
