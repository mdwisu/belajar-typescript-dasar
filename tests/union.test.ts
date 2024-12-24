describe("union", () => {
  // should support in ts
  it("should support in ts", () => {
    let person: string | number | boolean = "Dwi";
    console.log(person);
    person = 20;
    console.log(person);
  });

  it("should support typeof operator", () => {
    function process(value: string | number | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }
    expect(process("Dwi")).toBe("DWI");
    expect(process(20)).toBe(22);
    expect(process(true)).toBe(false);
  });
});
