describe("loop", () => {
  it("should support for loop", () => {
    const names: string[] = ["Dwi", "susanto", "eco"];

    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.info(name);
    }

    for (const name of names) {
      console.info(name);
    }

    for (const index in names) {
      console.info(names[index]);
    }
  });
});
