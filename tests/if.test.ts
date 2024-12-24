describe("If Statement", () => {
  it("should support if statement", () => {
    const examValue = 90;

    if (examValue > 80) {
      console.log("Good");
    } else if (examValue > 60) {
      console.log("Not Bad");
    } else {
      console.log("Try Again");
    }
  });

  it("should support ternary operator", () => {
    const value = 80;
    const say = value >= 75 ? "Good" : "Try Again";
    console.log(say);
  });

  // switch statement
  it("should support switch statement", () => {
    function sayHello(name: string): string {
      switch (name) {
        case "Dwi":
          return "Hello Dwi";
        case "Eko":
          return "Hello Eko";
        default:
          return "Hello";
      }
    }
    console.info(sayHello("Dwi"));
    console.info(sayHello("Eko"));
    console.info(sayHello("Budi"));
  });
});
