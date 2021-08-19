import CourseCard from "./CourseCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadCourses,
  selectCourses,
  selectLoaded,
  selectError,
} from "../../state/features/coursesSlice.js";

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
        <h1 style={{ marginBottom: "2rem" }}>Programlar</h1>
        {loaded ? (
          courses.map((c) => <CourseCard course={c} key={c._id}></CourseCard>)
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
};

export default Courses;
