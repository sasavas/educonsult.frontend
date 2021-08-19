import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PipeLineItem from "./PipelineItem";
import Card from "../../components/Card";
import { studentById } from "../../constants/network.js";
import studentPipelines from "../../constants/studentPipeline";
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
      </p>

      <section id="content-types" style={{ marginTop: "1.6rem" }}>
        <Card>
          <div className="pipeline-card">
            {studentPipelines.map((p) => (
              <PipeLineItem item={p}></PipeLineItem>
            ))}
          </div>
        </Card>
        <Card>
          <div className="row">
            <div className="col-md-4">
              <h4>Son Yapılan İşlem</h4>
              <p className="student-info">
                Milano Da Vinci Unicersitesi Tip Bolumune Muracaat Edildi
              </p>
            </div>
            <div className="col-md-4">
              <div>
                <h4>Sıradaki Yapılacak</h4>
              </div>
              <p className="student-info">
                Ogrenci ile iletisime gecilerek basvuru sureci hakkinda bilgi
                verilecek
              </p>
            </div>
            <div className="col-md-4">
              <h4>Uçuş Bilgisi</h4>
              <p className="student-info">
                <span className="student-sub-info">29.09.2021</span>
                <span className="student-sub-info">14:30</span>
                <span className="student-sub-info">Istanbul -- Milano</span>
                <span
                  className="student-sub-info"
                  style={{ fontStyle: "italic" }}
                >
                  Turk Hava Yollari
                </span>
              </p>
            </div>
          </div>
        </Card>
        <div className="student-action-buttons">
          <button className="btn btn-outline-primary">Yeni Görev Ekle</button>
          <button className="btn btn-outline-primary">E-posta Gönder</button>
        </div>
      </section>
    </div>
  );
};

export default StudentDetails;
