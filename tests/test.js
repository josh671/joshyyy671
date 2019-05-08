const expect = require("chai").expect;

const getInventor = require("../homework2");


//module test for get method/////////////////////
describe("inventors get method to call on specific item", () => {
 it("returns requested inventor", () => {
   let result = getInventor.get("max");
   expect(result).to.deep.equal({ first: 'Max', last: 'Planck', year: 1858, sex: 'male' });
 });
 
 it("fails w/ invalid inventor", () => {
   let result = getInventor.get("fake");
   expect(result).to.be.undefined;
 });
}); 


//module for adding method/////////////////////////////////////
describe("inventor add module", () => {
  it("adds requested inventor", () => {
    let result = getInventor.add({ first: 'Maxine', last: 'Planckine', year: 1858, sex: 'male' });
    expect(result.added).to.be.true; 
  });
  it("fails w/ existing inventor", () => {
    let result = getInventor.add({first: 'Max', last: 'Planck', year: 1858, sex: 'male'});
    expect(result.added).to.be.false;
  });
 }); 




//module for delete method////////////////////////////
describe("inventor delete module", () => {
  it("deletes requested inventor", () => {
    let result = getInventor.delete("max");
    expect(result.delete).to.be.true;
  });
  it("fails w/ invalid inventor", () => {
    let result = getInventor.delete("fake");
    expect(result.delete).to.be.undefined;
  });
 }); 


