import {
  render,
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("check default state of checkbox and button", () => {
  render(<SummaryForm />);

  const button = screen.getByRole("button", { name: "Confirm order" });
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to the terms and conditions",
  });
  expect(button).toBeDisabled();
  expect(checkbox).not.toBeChecked();
});

test("checkbox enables button, and clicking it again, disables it", async () => {
  render(<SummaryForm />);
  const user = userEvent.setup();
  const button = screen.getByRole("button", { name: "Confirm order" });
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to the terms and conditions",
  });

  await user.click(checkbox);
  expect(button).toBeEnabled();
  expect(checkbox).toBeChecked();
  await user.click(checkbox);
  expect(button).toBeDisabled();
  expect(checkbox).not.toBeChecked();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);
  const user = userEvent.setup();

  //popover starts hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mousover of checkbox label
  const termsAndConditionsText = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditionsText);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // then it disappears when we mouse out
  await user.unhover(termsAndConditionsText);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
//   expect(nullPopover2).not.toBeInTheDocument();
});
