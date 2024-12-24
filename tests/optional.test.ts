describe("Optional Parameter", () => {
  it("should support null and undefined", () => {
    function sayHello(name?: string | null) {
      if (name) {
        console.info("hello", name);
      } else {
        console.info("hello");
      }
    }
    sayHello("Dwi");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});
