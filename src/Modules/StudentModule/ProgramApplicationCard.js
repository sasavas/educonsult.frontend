import React, { useState } from "react";
import Card from "../../components/Card";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import styles from "./ProgramApplicationCard.module.css";
import { useDispatch } from "react-redux";
import { registerStudentToProgram } from "../../state/features/studentsSlice.js";

function ProgramApplicationCard({ course, student, pipelines }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const capitalize = (string) => {
    return string[0].toUpperCase() + string.substring(1);
  };

  return (
    <React.Fragment>
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
                  defaultValue="Seçilen öğrenci adı"
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
                  defaultValue="Seçilen bölüm adı"
                />
              </Col>
            </Form.Group>

            {/* <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="3">
                Pipeline
              </Form.Label>
              <Col sm="9">
                <Form.Select>
                  <option value="1">First Option</option>
                  <option value="2">Second Option</option>
                </Form.Select>
              </Col>
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                registerStudentToProgram({
                  studentId: student._id,
                  programId: course._id,
                  pipeline: pipelines[0],
                })
              );
            }}
          >
            Başvuru Yap
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default ProgramApplicationCard;
