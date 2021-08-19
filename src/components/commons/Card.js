import "./Card.css";

const Card = ({ children }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Card;
