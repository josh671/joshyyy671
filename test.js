var expect = require("chai").expect;
var book = require("../lib/book");

const validateassword = (password)=> { 
    return (password.toLowerCase() != password); 
}

describe("Password Validation", () => {
 it("returns requested book", function() {
   var result = book.get("dune");
   expect(result).to.be.true;
 

 }); 
 describe("Book module", () => {
    it("returns requested book", function() {
      var result = book.get("dune");
      expect(result).to.be.true;
    }); 

 }); 