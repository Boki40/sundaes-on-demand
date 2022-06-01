import { render, screen } from ".../../../test-utils/testing-library-utils";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";
import Options from "../Options";

test("displays image for each scoop option from the server", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });

  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images
  const altText = scoopImages.map((image) => image.getAttribute("alt"));
  expect(altText).toEqual(["Chocolate_scoop", "Vanilla_scoop"]);
});

test("displays image for each topping option from the server", async () => {
  render(<Options optionType="toppings" />, { wrapper: OrderDetailsProvider });

  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });

  expect(toppingImages).toHaveLength(3);

  const altText = toppingImages.map((image) => image.alt);
  expect(altText).toEqual([
    "Cherry_topping",
    "Strawberry_topping",
    "Raspberry_topping",
  ]);
});
