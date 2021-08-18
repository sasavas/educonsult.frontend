import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PipeLineItem from "./PipelineItem";
import { studentById } from "../constants/network";
import studentPipelines from "../constants/studentPipeline";
import "./StudentDetails.css";

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
      <h2 style={{ marginTop: "2rem" }}>
        {student.firstName + " " + student.lastName}
      </h2>
      <p>
        <span>
          {student.email} | {student.phone}{" "}
        </span>

        <section id="content-types" style={{ marginTop: "1.6rem" }}>
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <div className="card">
                <div className="card-content">
                  <div className="card-body">
                    {studentPipelines.map((p) => (
                      <PipeLineItem item={p}></PipeLineItem>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </p>
    </div>
  );
};

export default StudentDetails;
