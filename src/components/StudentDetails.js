import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { studentById } from "../constants/network";

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    axios.get(studentById(id)).then((result) => {
      console.log("student by id", result.data);
      setStudent(result.data[0]);
    });
  }, [id]);

  return (
    <div>
      <Link
        to="/students"
        className="btn btn-outline-secondary"
        style={{
          display: "inline",
          marginRight: "1rem",
        }}
      >
        Listeye Dön
      </Link>
      <h1 style={{ display: "inline" }}>StudentDetails</h1>
      <p>{student.firstName}</p>
    </div>
  );
};

export default StudentDetails;
