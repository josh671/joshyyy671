const expect = require("chai").expect;

const getInventor = require("../homework2");


//module test for get method/////////////////////
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

//module for delete method////////////////////////////
describe("inventor delete module", () => {
  it("deletes requested inventor", () => {
    const result = getInventor.delete("max");
    expect(result).to.deep.equal({deleted: "max", total: 6})
  });
  it("fails w/ invalid inventor", () => {
    const result = getInventor.get("fake");
    expect(result).to.be.undefined;
  });
 }); 

//module
describe("inventor add module", () => {
  it("adds requested inventor", () => {
    const result = getInventor.add({ first: 'Maxine', last: 'Planckine', year: 1858, sex: 'male' });
    expect(result).to.be.true 
  });
  it("fails w/ invalid inventor", () => {
    const result = getInventor.get("fake");
    expect(result).to.be.undefined;
  });
 }); 
