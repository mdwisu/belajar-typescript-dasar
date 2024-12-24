// any
describe('any', () => { 
  // should support in ts
  it('should support in ts', () => {
    const person  : any = {
      name: 'Dwi',
      age: 20
    };

    person.name = 'Dwi Susanto';
    person.address = 'Jalan Raya';
    console.log(person);
  });
 })