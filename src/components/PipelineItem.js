import "./PipelineItem.css";

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
    <div className="item-container">
      <i className={iconClass + " pipeline-icon"}></i>
      <br></br>
      <p className="pipeline-text">{item.text}</p>
    </div>
  );
};

export default PipelineItem;
