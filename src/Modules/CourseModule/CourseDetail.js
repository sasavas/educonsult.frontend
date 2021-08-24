import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectCourse,
  selectErrorCourse,
  selectLoadedCourse,
  getCourseById,
} from "../../state/features/coursesSlice.js";

const CourseDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const course = useSelector(selectCourse);
  const errorCourse = useSelector(selectErrorCourse);
  const loadedCourse = useSelector(selectLoadedCourse);

  useEffect(() => {
    dispatch(getCourseById(id));
  }, [dispatch, id]);

  if (errorCourse) {
    return <p>Programlar yüklenemedi :/</p>;
  } else {
    if (loadedCourse) {
      return <div>{course.programName}</div>;
    } else {
      return <p>Loading...</p>;
    }
  }
};

export default CourseDetail;
