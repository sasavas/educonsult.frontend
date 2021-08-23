import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProgramApplicationCard from "./ProgramApplicationCard";

import {
  loadCourses,
  selectCourses,
  selectLoaded,
  selectError,
} from "../../state/features/coursesSlice.js";

import { selectStudent } from "../../state/features/studentsSlice.js";

import {
  loadPipelines,
  selectPipelines,
} from "../../state/features/pipelineSlice.js";

function RegisterToProgram() {
  const courses = useSelector(selectCourses);
  const loaded = useSelector(selectLoaded);
  const error = useSelector(selectError);
  const student = useSelector(selectStudent);
  const dispatch = useDispatch();

  const pipelines = useSelector(selectPipelines);

  useEffect(() => {
    dispatch(loadCourses());
    dispatch(loadPipelines());
  }, [dispatch]);

  if (error) {
    return <p>{error}</p>;
  } else {
    return (
      <div>
        <h1 style={{ marginBottom: "2rem" }}>Program Basvurusu Yap</h1>
        {loaded ? (
          courses.map((c) => (
            <ProgramApplicationCard
              course={c}
              student={student}
              pipelines={pipelines}
              key={c._id}
            ></ProgramApplicationCard>
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
}

export default RegisterToProgram;
