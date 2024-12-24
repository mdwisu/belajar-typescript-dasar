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

  // default value
  it("should support default value", () => {
    function sayHello(name: string = "Dwi"): string {
      return `Hello ${name}`;
    }
    expect(sayHello()).toBe("Hello Dwi");
    expect(sayHello("eco")).toBe("Hello eco");
  });

  // rest parameter
  it("should support rest parameter", () => {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
    expect(sum(1, 2, 3)).toBe(6);
  });

  // support optional parameter
  it("should support optional parameter", () => {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      }
      return `Hello ${firstName}`;
    }
    expect(sayHello("Dwi")).toBe("Hello Dwi");
    expect(sayHello("Dwi", "Eko")).toBe("Hello Dwi Eko");
  });

  // support function overloading
  it("should support function overloading", () => {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    }
    expect(callMe(10)).toBe(100);
    expect(callMe("Dwi")).toBe("DWI");
  });
});
