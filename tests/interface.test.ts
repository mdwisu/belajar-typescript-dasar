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
});
