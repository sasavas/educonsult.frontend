import styles from "./CourseCard.module.css";
import Card from "../../components/Card";

const CourseCard = ({ course }) => {
  const capitalize = (string) => {
    return string[0].toUpperCase() + string.substring(1);
  };

  return (
    <section id="content-types">
      <Card>
        <div className={styles.courseContainer}>
          <div className={styles.programContainer}>
            <div className={styles.programPicture}>
              <img
                className="img-fluid img-thumbnail"
                src="assets/images/samples/placeholder-image.jpg"
                alt="Üniversite Fotoğrafı"
              ></img>
            </div>
            <div className={styles.programDetails}>
              <div className="card-title">
                <h4>{course.fieldName}</h4>
                <span>{capitalize(course.school.name)}, </span>
                <span className="fst-italic">
                  {capitalize(course.fieldType)}
                </span>
              </div>
              <p className={`card-text ${styles.programDetailsNotes}`}>
                {course.notes}
              </p>
              {course.lanugage && (
                <p className="card-text">
                  <span style={{ fontWeight: "bold" }}>Language: </span>{" "}
                  {course.language}
                </p>
              )}
              {course.vacancies && (
                <p className="card-text">
                  <span style={{ fontWeight: "bold" }}>Kontenjan: </span>
                  {course.vacancies}
                </p>
              )}
              {course.languageRequirement && (
                <p>
                  <span style={{ fontWeight: "bold" }}>Dil Sınavı: </span>
                  {course.languageRequirement.certificateName}
                  <span style={{ fontWeight: "bold" }}>, Baraj Puan: </span>
                  {course.languageRequirement.minScore}
                </p>
              )}
            </div>
            <div className={styles.programDates}>
              <p>
                <span style={{ fontWeight: "bold" }}>Başvuru Başlangıç: </span>
                {course.applicationDates.beginDate.substring(0, 10)}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Başvuru Bitiş: </span>
                <span>{course.applicationDates.endDate.substring(0, 10)}</span>
              </p>
              <button className="btn btn-light-primary">
                Daha Fazla Bilgi
              </button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default CourseCard;
