import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays image for each scoop option from the server", async () => {
  render(<Options optionType="scoops" />);

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });

  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images
  const altText = scoopImages.map((image) => image.getAttribute("alt"));
  expect(altText).toEqual(["Chocolate_scoop", "Vanilla_scoop"]);
});
