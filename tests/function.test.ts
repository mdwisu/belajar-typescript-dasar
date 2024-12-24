describe("Function", () => {
  it("should support in typescript", () => {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }
    expect(sayHello("Dwi")).toBe("Hello Dwi");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }
    printHello("Dwi");
  });
});
