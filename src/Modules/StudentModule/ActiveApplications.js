import { Link } from "react-router-dom";
import Card from "../../components/Card";
import PipelineItem from "./PipelineItem";
import studentPipelines from "../../constants/studentPipeline";
import styles from "./ActiveApplications.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { selectStudent } from "../../state/features/studentsSlice.js";

function ActiveApplications() {
  const student = useSelector(selectStudent);

  return (
    <React.Fragment>
      {student.registeredPrograms.map((rp) => (
        <Card>
          <h6 className="card-title">{rp.programId}</h6>
          <div className={styles.pipelineCard}>
            {studentPipelines.map((p) => (
              <PipelineItem key={p.title} item={p}></PipelineItem>
            ))}
          </div>
        </Card>
      ))}
      <Link to="/registerToProgram" className="btn btn-outline-primary">
        Bölüm Kaydı Yap
      </Link>
    </React.Fragment>
  );
}

export default ActiveApplications;
