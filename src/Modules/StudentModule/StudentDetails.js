/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useParams } from "react-router-dom";
import StudentInfo from "./StudentSummary";
import ActiveApplications from "./ActiveApplications";
import styles from "./StudentDetails.module.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentById,
  selectStudent,
  selectErrorStudent,
  selectLoadedStudent,
} from "../../state/features/studentsSlice.js";
import React from "react";

const StudentDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const student = useSelector(selectStudent);
  const studentError = useSelector(selectErrorStudent);
  const studentLoaded = useSelector(selectLoadedStudent);

  useEffect(() => {
    dispatch(getStudentById(id));
  }, [dispatch, id]);

  const tabs = ["Öğrenci Özet", "Kayıtlı Bölümler Detay"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderActiveTab = () => {
    if (activeTab === tabs[0]) {
      return <StudentInfo />;
    } else if (activeTab === tabs[1]) {
      return <ActiveApplications />;
    }
  };

  if (studentError) {
    return <p>Error loading Student :/</p>;
  } else {
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
        {!studentLoaded ? (
          <p>Loading...</p>
        ) : (
          <React.Fragment>
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
          </React.Fragment>
        )}
      </div>
    );
  }
};

export default StudentDetails;
