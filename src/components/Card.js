import "./Card.css";

const Card = ({ children, color, textColor }) => {
  return (
    <div className="card" style={{ backgroundColor: color, color: textColor }}>
      <div className="card-content">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Card;
