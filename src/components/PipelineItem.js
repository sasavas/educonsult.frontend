const PipelineItem = ({ item }) => {
  let iconClass;
  if (item.status === "todo") {
    iconClass = "bi bi-circle";
  } else if (item.status === "inProgress") {
    iconClass = "bi bi-circle-half";
  } else if (item.status === "done") {
    iconClass = "bi bi-check-circle";
  }

  return (
    <div style={{ width: "12rem" }}>
      <i className={iconClass} style={{ fontSize: "2rem" }}></i>
      <p style={{ fontSize: ".8rem" }}>{item.text}</p>
    </div>
  );
};

export default PipelineItem;
