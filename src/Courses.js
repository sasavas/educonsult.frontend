import Course from "./Course";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadCourses,
  selectCourses,
  selectLoaded,
} from "./state/features/coursesSlice";

const Courses = (props) => {
  const courses = useSelector(selectCourses);
  const loaded = useSelector(selectLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  return (
    <div id="main">
      {loaded ? (
        courses.map((c) => <Course course={c} key={c._id}></Course>)
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Courses;
