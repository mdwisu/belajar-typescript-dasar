import { Seller } from "../src/seller";

describe("Interface", () => {
  it("should must declare", () => {
    const seller: Seller = {
      id: 1,
      name: "Dwi",
      nib: "123",
      npwp: "123",
    };
    seller.name = "Dwi Susanto";
    console.info(seller);
  });

  it("should support funciton interface", () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };
    expect(add(1, 2)).toBe(3);
  });
});
