import { Link } from "react-router-dom";
import "./StudentCard.css";

const StudentCard = ({ student }) => {
  return (
    <div>
      <section id="content-types">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="student-container">
                    <div className="student-picture">
                      <img
                        className="img img-thumbnail img-responsive"
                        src={`assets/images/faces/${
                          Math.floor(Math.random() * 3) + 1
                        }.jpg`}
                        alt="Öğrenci Fotoğrafı"
                      ></img>
                    </div>
                    <div className="student-details">
                      <p>{student.firstName + " " + student.lastName}</p>
                      <p>{student.phone}</p>
                      <p>{student.email}</p>
                      <p>{student.university}</p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>
                          Program Türü:{" "}
                        </span>
                        <span> {student.targetProgram.programType} </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>
                          Hedef Program:{" "}
                        </span>
                        <span> {student.targetProgram.program} </span>
                      </p>
                    </div>
                    <div className="student-actions">
                      <button
                        className="btn btn-block btn-primary"
                        style={{ marginBottom: ".4rem" }}
                      >
                        Bölüm Ekle
                      </button>
                      <Link
                        to={"/studentDetails/" + student._id}
                        className="btn btn-block btn-outline-primary"
                      >
                        Bilgileri Düzenle
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentCard;
