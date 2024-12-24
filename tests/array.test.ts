describe("Array", () => {
  it("should array", () => {
    const names: string[] = ["Dwi", "Dwi", "Dwi"];
    const values: number[] = [1, 2, 3];

    console.log(names);
    console.log(values);
  });

  // should support readonly array
  it("should support readonly array", () => {
    const names: readonly string[] = ["Dwi", "Dwi", "Dwi"];
    const values: ReadonlyArray<number> = [1, 2, 3];

    console.log(names);
    console.log(names[1]);
    console.log(values);

    // names[0] = "hello";
    // values[0] = 100;
  });

  // it shloud support tupple
  it("should support tupple", () => {
    const names: [string, number] = ["Dwi", 1];
    console.log(names);
  });
});
