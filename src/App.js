import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Courses from "./components/Courses";
import SideMenu from "./components/SideMenu";
import Students from "./components/Students";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import AddCourse from "./components/AddCourse";
import StudentDetails from "./components/StudentDetails";

const App = () => {
  return (
    <div id="main">
      <div>
        <header className="mb-3">
          <a
            className="burger-btn d-block d-xl-none"
            style={{ cursor: "Pointer" }}
          >
            <i className="bi bi-justify fs-3"></i>
          </a>
        </header>
      </div>
      <Router>
        <SideMenu></SideMenu>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/courses" component={Courses}></Route>
          <Route exact path="/addCourse" component={AddCourse}></Route>
          <Route exact path="/students" component={Students}></Route>
          <Route exact path="/addStudent" component={AddStudent}></Route>
          <Route
            path="/studentDetails/:id"
            exact
            component={StudentDetails}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
