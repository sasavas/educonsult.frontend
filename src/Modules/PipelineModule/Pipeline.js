import Card from "../../components/Card";
import { Col, Row, Button } from "react-bootstrap";

const Pipeline = ({ pipeline }) => {
  return (
    <Card>
      <Row className="d-flex justift-content-center">
        <Col md={10}>
          {pipeline.steps.map((s, i) => (
            <div key={i} style={{ display: "inline" }}>
              <span style={{ fontWeight: "bold" }}>{i + 1}. </span>
              <span>{s.text + ", "}</span>
            </div>
          ))}
        </Col>
        <Col className="" md={2}>
          <Button>Düzenle</Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Pipeline;
