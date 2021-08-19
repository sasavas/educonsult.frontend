import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ApplicationCard from "./ProgramApplicationCard";

import {
  loadCourses,
  selectCourses,
  selectLoaded,
  selectError,
} from "../../state/features/coursesSlice.js";

function RegisterToProgram() {
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
        <h1 style={{ marginBottom: "2rem" }}>Program Basvurusu Yap</h1>
        {loaded ? (
          courses.map((c) => (
            <ApplicationCard course={c} key={c._id}></ApplicationCard>
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
}

export default RegisterToProgram;
