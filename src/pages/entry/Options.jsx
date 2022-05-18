import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ScoopOption from "./ScoopOption";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => console.log(error));
  }, [optionType]);

  // TODO: Toppings should be a separate component
  const ItemComponent = optionType === "scoops" ? ScoopOption : null;

  return (
    <Row>
      {items.map((item, index) => (
        <ItemComponent key={index} item={item} />
      ))}
    </Row>
  );
}
