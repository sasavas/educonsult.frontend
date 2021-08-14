import Course from "./Course";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadCourses,
  selectCourses,
  selectLoaded,
  selectError,
} from "../state/features/coursesSlice";

const Courses = (props) => {
  const courses = useSelector(selectCourses);
  const loaded = useSelector(selectLoaded);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  if (error) {
    return <p>{error}</p>;
  } else {
    return (
      <div>
        {loaded ? (
          courses.map((c) => <Course course={c} key={c._id}></Course>)
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
};

export default Courses;
