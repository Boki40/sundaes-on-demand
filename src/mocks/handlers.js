import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Chocolate", imagePath: "/images/chocolate.jpg" },
        { name: "Vanilla", imagePath: "/images/vanilla.jpg" },
      ])
    );
  }),
  rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Cherry", imagePath: "/images/cherry.jpg" },
        { name: "Strawberry", imagePath: "/images/strawberry.jpg" },
        { name: "Raspberry", imagePath: "/images/raspberry.jpg" },
      ])
    );
  }),
];
