/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import StudentInfo from "./StudentSummary";
import ActiveApplications from "./ActiveApplications";
import styles from "./StudentDetails.module.css";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectStudent } from "../../state/features/studentsSlice.js";

const StudentDetails = () => {
  const [student, setStudent] = useState({});
  const studentSelected = useSelector(selectStudent);

  useEffect(() => {
    setStudent(studentSelected);
  }, [studentSelected]);

  const tabs = ["Öğrenci Özet", "Kayıtlı Bölümler Detay"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderActiveTab = () => {
    if (activeTab === tabs[0]) {
      return <StudentInfo />;
    } else if (activeTab === tabs[1]) {
      return <ActiveApplications />;
    }
  };

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
      </p>
      <ul style={{ marginTop: "2rem" }} className="nav nav-pills">
        {tabs.map((t) => {
          const isActive = activeTab === t;
          return (
            <li className="nav-item" key={t}>
              <button
                className={`${styles.linkButton} btn btn-link nav-link ${
                  isActive ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab(t);
                }}
              >
                {t}
              </button>
            </li>
          );
        })}
      </ul>
      <section id="content-types" style={{ marginTop: "1.6rem" }}>
        {renderActiveTab()}
      </section>
    </div>
  );
};

export default StudentDetails;
