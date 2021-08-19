import React from "react";
import Card from "../../components/Card";
import styles from "./ProgramApplicationCard.module.css";

function ProgramApplicationCard({ course }) {
  const capitalize = (string) => {
    return string[0].toUpperCase() + string.substring(1);
  };

  return (
    <Card>
      <div className={styles.cardTitle}>
        <h4>{course.fieldName}</h4>
        <span>{capitalize(course.school.name)}, </span>
        <span className="fst-italic">{capitalize(course.fieldType)}</span>
      </div>
      <div className={styles.programContainer}>
        <div className={styles.programDetails}>
          {course.language && (
            <p className={styles.cardText}>
              <span style={{ fontWeight: "bold" }}>Language: </span>{" "}
              {course.language}
            </p>
          )}
          {course.vacancies && (
            <p className={styles.cardText}>
              <span style={{ fontWeight: "bold" }}>Kontenjan: </span>
              {course.vacancies + ", "}
            </p>
          )}
          {course.languageRequirement && (
            <p className={styles.cardText}>
              <span style={{ fontWeight: "bold" }}>Dil Sınavı: </span>
              {course.languageRequirement.certificateName}
              <span style={{ fontWeight: "bold" }}>, Baraj Puan: </span>
              {course.languageRequirement.minScore}
            </p>
          )}
        </div>
        <div className={styles.programNotes}>
          <h6>Program Hakkında</h6>
          <p className={`card-text ${styles.programDetailsNotes}`}>
            {course.notes}
          </p>
        </div>
        <div className={styles.programDates}>
          <p>
            <span style={{ fontWeight: "bold" }}>Başvuru Başlangıç: </span>
            <span>{course.applicationDates.beginDate.substring(0, 10)}</span>
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Başvuru Bitiş: </span>
            <span>{course.applicationDates.endDate.substring(0, 10)}</span>
          </p>
          <button className="btn btn-light-primary">Başvuru Yap</button>
        </div>
      </div>
    </Card>
  );
}

export default ProgramApplicationCard;
