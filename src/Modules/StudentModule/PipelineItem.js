import styles from "./PipelineItem.module.css";

const PipelineItem = ({ item }) => {
  let iconClass;
  if (item.status === "todo") {
    iconClass = "bi bi-circle";
  } else if (item.status === "inProgress") {
    iconClass = "bi bi-circle-half";
  } else if (item.status === "done") {
    iconClass = "bi bi-circle-fill";
  }

  return (
    <div className={styles.itemContainer}>
      <i className={`${iconClass} ${styles.pipelineIcon}`}></i>
      <br></br>
      <p className={styles.pipelineText}>{item.text}</p>
    </div>
  );
};

export default PipelineItem;
