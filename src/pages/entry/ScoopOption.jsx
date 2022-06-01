import { Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function ScoopOption({ item, updateItemCount }) {
  const { name, imagePath } = item;

  const handleChange = (e) => {
    updateItemCount(name, e.target.value);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name}_scoop`}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label column xs="6" style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col cs="5" style={{ textAlign: "left" }}>
          <Form.Control
            type="number"
            defaultValue={0}
            min={0}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
    </Col>
  );
}
