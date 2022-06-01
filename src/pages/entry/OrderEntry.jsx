import { useOrderDetails } from "../../contexts/OrderDetails";
import Options from "./Options";

export default function OrderEntry() {
  const [orderDetails] = useOrderDetails();
  return (
    <>
      <Options optionType={"toppings"} />
      <Options optionType={"scoops"} />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
    </>
  );
}
