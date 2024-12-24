import { Employee, Manager } from "../src/employee";
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

  it("should support indexable interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Dwi", "Dwi", "Dwi"];
    console.info(names);
  });

  it("should support indexable for non number index", () => {
    interface StringDictionary {
      [index: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Dwi",
      address: "Jalan Raya",
    };
    expect(dictionary.name).toBe("Dwi");
    expect(dictionary.address).toBe("Jalan Raya");
  });

  it("should support extend interface", () => {
    const employee: Employee = {
      id: 1,
      name: "Dwi",
      division: "IT",
    };
    console.info(employee);
    const manager: Manager = {
      id: 1,
      name: "Dwi",
      division: "IT",
      numberOfEmployees: 10,
    };
    console.info(manager);
  });

  it("should support function in interface", () => {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const person: Person = {
      name: "Dwi",
      sayHello(name: string): string {
        return `Hello ${name} my name is ${this.name}`;
      },
    };
    console.info(person.sayHello("budi"));
  });
});
