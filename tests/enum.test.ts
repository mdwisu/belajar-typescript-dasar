import { Customer, CustomerType } from "../src/enum";

describe("Enum", () => {
  it("should must declare", () => {
    const customer: Customer = {
      id: 1,
      name: "Dwi",
      type: CustomerType.GOLD,
    };

    console.info(customer);
  });
});
