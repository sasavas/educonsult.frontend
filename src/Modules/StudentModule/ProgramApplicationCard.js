import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerStudentToProgram } from "../../state/features/studentsSlice.js";
import { capitalizeFirstLetter } from "../../helpers/stringHelpers.js";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-date-picker";
import Card from "../../components/Card";
import styles from "./ProgramApplicationCard.module.css";

function ProgramApplicationCard({ course, student, pipelines }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [pipeline, setPipeline] = useState(pipelines[0]);

  function handleSelectPipeline(e) {
    setPipeline(pipelines.filter((p) => p._id === e.target.value)[0]);
  }

  const [applicationDate, setApplicationDate] = useState(new Date());

  function handleApplicationDateSelect(date) {
    setApplicationDate(date);
  }

  return (
    <div>
      <Card>
        <div className={styles.cardTitle}>
          <h4>{course.programName}</h4>
          <span>{capitalizeFirstLetter(course.school.name)}, </span>
          <span className="fst-italic">
            {capitalizeFirstLetter(course.programType)}
          </span>
        </div>
        <div className={styles.programContainer}>
          <div className={styles.programDetails}>
            {course.language && (
              <p className={styles.cardText}>
                <span className={styles.bold}>Language: </span>{" "}
                {course.language}
              </p>
            )}
            {course.vacancies && (
              <p className={styles.cardText}>
                <span className={styles.bold}>Kontenjan: </span>
                {course.vacancies + ", "}
              </p>
            )}
            {course.languageRequirement && (
              <p className={styles.cardText}>
                <span className={styles.bold}>Dil Sınavı: </span>
                {course.languageRequirement.certificateName}
                <span className={styles.bold}>, Baraj Puan: </span>
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
              <span className={styles.bold}>Başvuru Başlangıç: </span>
              <span>{course.applicationDates.beginDate.substring(0, 10)}</span>
            </p>
            <p>
              <span className={styles.bold}>Başvuru Bitiş: </span>
              <span>{course.applicationDates.endDate.substring(0, 10)}</span>
            </p>
            <button className="btn btn-light-primary" onClick={handleShow}>
              Başvuru Yap
            </button>
          </div>
        </div>
      </Card>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Öğrenci Bölüm Kaydı Yap</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm="3">
                Öğrenci
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue={student.firstName + " " + student.lastName}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="3">
                Bölüm
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue={course.programName}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="3">
                Pipeline
              </Form.Label>
              <Col sm="9">
                <select className="form-select" onChange={handleSelectPipeline}>
                  {pipelines.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="3">
                Başvuru Tarihi
              </Form.Label>
              <Col sm="9">
                <DatePicker
                  selected={applicationDate}
                  value={applicationDate}
                  onChange={(date) => handleApplicationDateSelect(date)}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              console.log("course", course);
              console.log("student", student);
              dispatch(
                registerStudentToProgram({
                  studentId: student._id,
                  programId: course._id,
                  pipeline: pipeline,
                  applicationDate: applicationDate,
                })
              );
              handleClose();
            }}
          >
            Başvuru Yap
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProgramApplicationCard;
