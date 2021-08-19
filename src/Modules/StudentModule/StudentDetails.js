import { Link } from "react-router-dom";
import PipeLineItem from "./PipelineItem";
import Card from "../../components/Card";
import studentPipelines from "../../constants/studentPipeline";
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

      <section id="content-types" style={{ marginTop: "1.6rem" }}>
        <Card>
          <div className={styles.pipelineCard}>
            {studentPipelines.map((p) => (
              <PipeLineItem item={p}></PipeLineItem>
            ))}
          </div>
        </Card>
        <Card>
          <div className="row">
            <div className="col-md-4">
              <h4>Son Yapılan İşlem</h4>
              <p className={styles.studentInfo}>
                Milano Da Vinci Unicersitesi Tip Bolumune Muracaat Edildi
              </p>
            </div>
            <div className="col-md-4">
              <div>
                <h4>Sıradaki Yapılacak</h4>
              </div>
              <p className={styles.studentInfo}>
                Ogrenci ile iletisime gecilerek basvuru sureci hakkinda bilgi
                verilecek
              </p>
            </div>
            <div className="col-md-4">
              <h4>Uçuş Bilgisi</h4>
              <p className={styles.studentInfo}>
                <span className={styles.studentSubInfo}>29.09.2021</span>
                <span className={styles.studentSubInfo}>14:30</span>
                <span className={styles.studentSubInfo}>
                  Istanbul -- Milano
                </span>
                <span
                  className={styles.studentSubInfo}
                  style={{ fontStyle: "italic" }}
                >
                  Turk Hava Yollari
                </span>
              </p>
            </div>
          </div>
        </Card>
        <div className={styles.studentActions}>
          <button className="btn btn-outline-primary">Yeni Görev Ekle</button>
          <Link to="/registerToProgram" className="btn btn-outline-primary">
            Bölüm Kaydı Yap
          </Link>
          <button className="btn btn-outline-primary">E-posta Gönder</button>
        </div>
      </section>
    </div>
  );
};

export default StudentDetails;
