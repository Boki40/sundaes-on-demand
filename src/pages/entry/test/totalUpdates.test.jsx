import { render, screen } from ".../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";
import Options from "../Options";

test("update scoop subtotal when scoops change", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  // make sure total start out at $0.00
  const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopsSubtotal).toHaveTextContent("0.00");

  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "1");
  expect(scoopsSubtotal).toHaveTextContent("2.00");

  // update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  await userEvent.clear(chocolateInput);
  await userEvent.type(chocolateInput, "2");
  expect(scoopsSubtotal).toHaveTextContent("6.00");
});

test("update topping subtotal when scopps change", async () => {
  render(<Options optionType="toppings" />);
  // default subtotal is $0.00
  const subtotalText = screen.getByText("Toppings total: $", { exact: false });
  expect(subtotalText).toHaveTextContent("0.00");

  // find and check a box for one option and check subtotal
  const cherryCheckbox = await screen.findByRole("checkbox", {
    name: "Cherry",
  });
  await userEvent.click(cherryCheckbox);
  expect(subtotalText).toHaveTextContent("1.50");

  // find and check a box for another option and check subtotal
  const strawberryCheckbox = await screen.findByRole("checkbox", {
    name: "Strawberry",
  });
  await userEvent.click(strawberryCheckbox);
  expect(subtotalText).toHaveTextContent("3.00");

  // find and check a box for a checked option and check subtotal
  await userEvent.click(cherryCheckbox);
  expect(subtotalText).toHaveTextContent("1.50");
});
