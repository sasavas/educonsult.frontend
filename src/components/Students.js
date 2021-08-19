import StudentTile from "./StudentTile";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadStudents,
  selectStudents,
  selectLoaded,
  selectError,
} from "../state/features/studentSlice";

const Students = () => {
  const students = useSelector(selectStudents);
  const loaded = useSelector(selectLoaded);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStudents());
  }, [dispatch]);

  if (error) {
    return <p>{error}</p>;
  } else {
    return (
      <div>
        <h1 style={{ marginBottom: "2rem" }}>Öğrenciler</h1>
        {loaded ? (
          students.map((s) => <StudentTile key={s._id} student={s} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
};

export default Students;
