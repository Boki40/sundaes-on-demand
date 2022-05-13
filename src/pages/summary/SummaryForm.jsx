import React from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>No ice cream will actually be delivered.</Popover.Body>
  </Popover>
);

const checkboxLabel = (
  <span>
    I agree to the
    <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
      <span style={{ color: "blue" }}> terms and conditions</span>
    </OverlayTrigger>
  </span>
);

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = React.useState(false);

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
