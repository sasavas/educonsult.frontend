import { Link } from "react-router-dom";

const StudentDetails = () => {
  return (
    <div>
      <Link
        to="/students"
        className="btn btn-outline-secondary"
        style={{
          display: "inline",
          marginRight: "1rem",
        }}
      >
        Listeye Dön
      </Link>
      <h1 style={{ display: "inline" }}>StudentDetails</h1>
    </div>
  );
};

export default StudentDetails;
