const expect = require("chai").expect;

const getInventor = require("../itc230/homework2");


//module test for get method
describe("inventors get method to call on specific item", () => {
 it("returns requested inventor", () => {
   const result = getInventor.get("max");
   expect(result).to.deep.equal({ first: 'Max', last: 'Planck', year: 1858, sex: 'male' });
 });
 
 it("fails w/ invalid inventor", () => {
   const result = getInventor.get("fake");
   expect(result).to.be.undefined;
 });
}); 

//module for delete method
describe("inventor delete module", () => {
  it("deletes requested inventor", () => {
    const result = getInventor.delete("max");
    expect(result).to.deep.equal({deleted: "max", total: 7})
  });
  
  it("fails w/ invalid inventor", () => {
    const result = getInventor.get("fake");
    expect(result).to.be.undefined;
  });
 }); 

//module for add method 
describe("add requested inventor", ()=> { 
  it("adds requested item to array", () =>{ 
    const result = getInventor.add( { first: 'Thomas', last: 'Kepler', year: 1571, sex: 'male' });
    expect(result).to.deep.true;
  });
  it("add fails w/ existing city", ()=> { 
    const result = getInventor.add( { first: 'Johannes', last: 'Kepler', year: 1571, sex: 'male' }); 
    expect(result.added).to.be.false;
  });

} );