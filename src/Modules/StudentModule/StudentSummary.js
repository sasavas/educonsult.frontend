import React from "react";
import Card from "../../components/Card";
import styles from "./StudentSummary.module.css";

function StudentInfo() {
  return (
    <React.Fragment>
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
              <span className={styles.studentSubInfo}>Istanbul -- Milano</span>
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
        <button className="btn btn-outline-primary">E-posta Gönder</button>
      </div>
    </React.Fragment>
  );
}

export default StudentInfo;
