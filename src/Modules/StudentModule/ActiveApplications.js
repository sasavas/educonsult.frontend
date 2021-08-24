import { Link } from "react-router-dom";
import Card from "../../components/Card";
import PipelineItem from "./PipelineItem";
import styles from "./ActiveApplications.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { selectStudent } from "../../state/features/studentsSlice.js";

function ActiveApplications() {
  const student = useSelector(selectStudent);

  if (student) {
    return (
      <React.Fragment>
        {student.registeredPrograms.map((rp) => {
          return (
            <div key={rp.program._id}>
              <Card>
                <h6 className="card-title">{`${rp.program.school.name}, ${rp.program.programName}`}</h6>
                <div className={styles.pipelineCard}>
                  {rp.pipeline.steps.map((p) => (
                    <PipelineItem key={p._id} item={p}></PipelineItem>
                  ))}
                </div>
              </Card>
            </div>
          );
        })}
        <Link to="/registerToProgram" className="btn btn-outline-primary">
          Bölüm Kaydı Yap
        </Link>
      </React.Fragment>
    );
  } else {
    return <p>Loding...</p>;
  }
}

export default ActiveApplications;
