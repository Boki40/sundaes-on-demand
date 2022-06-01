import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function ToppingOption({ item, updateItemCount }) {
  const { name, imagePath } = item;
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name}_topping`}
      />
      <Form.Group controlId={`${name}-count`}>
        <Form.Check
          type="checkbox"
          label={name}
          onChange={(e) => {
            updateItemCount(name, e.target.checked ? 1 : 0);
          }}
        />
      </Form.Group>
    </Col>
  );
}
