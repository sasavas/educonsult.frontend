import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/Card.js";
import styles from "./StudentTile.module.css";
import { getStudent } from "../../state/features/studentsSlice.js";

const StudentTile = ({ student }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <section id="content-types">
        <Card>
          <div className={styles.studentContainer}>
            <div className={styles.studentPicture}>
              <img
                className="img img-thumbnail img-responsive"
                src={`assets/images/faces/${
                  Math.floor(Math.random() * 3) + 1
                }.jpg`}
                alt="Öğrenci Fotoğrafı"
              ></img>
            </div>
            <div className={styles.studentDetails}>
              <p className="card-text">
                {student.firstName + " " + student.lastName}
              </p>
              <p className="card-text">{student.phone}</p>
              <p className="card-text">{student.email}</p>
              <p className="card-text">{student.university}</p>
              <p className="card-text">
                <span style={{ fontWeight: "bold" }}>Program Türü: </span>
                <span> {student.targetProgram.programType} </span>
              </p>
              <p className="card-text">
                <span style={{ fontWeight: "bold" }}>Hedef Program: </span>
                <span> {student.targetProgram.program} </span>
              </p>
            </div>
            <div className={styles.studentActions}>
              <button
                className="btn btn-block btn-primary"
                style={{ marginBottom: ".4rem" }}
              >
                Bölüm Ekle
              </button>
              <Link
                to={"/studentDetails"}
                className="btn btn-block btn-outline-primary"
                onClick={() => dispatch(getStudent(student))}
              >
                Bilgileri Düzenle
              </Link>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default StudentTile;
