import Card from "../../components/Card";
import styles from "./StatisticsCard.module.css";
import { Col } from "react-bootstrap";

const StatisticsCard = ({ iconClass, title, count }) => {
  return (
    <Col md="2">
      <Card color="#8DACE4" textColor="white">
        <div className={styles.mainContainer}>
          <i className={`${iconClass} ${styles.icon}`}></i>
          <div className={styles.statisticsContainer}>
            <p>{title}</p>
            <p className={styles.bold}>{count}</p>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default StatisticsCard;
