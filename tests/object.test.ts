describe("Object", () => {
  it("should must declare", () => {
    const person: { id: string; name: string; hobbies?: string[] } = {
      id: "1",
      name: "Dwi",
    };
    console.info(person);

    person.id = "2";
    person.name = "Dwi Susanto";
  });
});
