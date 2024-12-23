import { sayHello } from "../src/say-hello";

describe("sayHello", () => {
  it("should say hello dwi", () => {
    expect(sayHello("Dwi")).toBe("Hello Dwi");
  });
});
