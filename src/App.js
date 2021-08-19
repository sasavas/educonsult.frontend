import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SideMenu from "./Modules/MenuModule/SideMenu";
import Dashboard from "./Modules/DashboardModule/Dashboard";
import Courses from "./Modules/CourseModule/Courses";
import Students from "./Modules/StudentModule/Students";
import AddStudent from "./Modules/StudentModule/AddStudent";
import AddCourse from "./Modules/CourseModule/AddCourse";
import StudentDetails from "./Modules/StudentModule/StudentDetails";
import ProgramApplication from "./Modules/StudentModule/ProgramApplication";

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
          <Route
            exact
            path="/registerToProgram"
            component={ProgramApplication}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
