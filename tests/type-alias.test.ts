import { Category, Product } from "../src/type-alias";

describe("Type Alias", () => {
  it("should must declare", () => {
    const category: Category = {
      id: 1,
      name: "Laptop",
    };

    const product: Product = {
      id: "1",
      name: "Asus",
      price: 1000,
      category,
    };
    console.info(category);
    console.info(product);
  });
});
