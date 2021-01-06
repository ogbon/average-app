const { findAverage } = require('../app');
const { expect } = require('chai');

describe("Find Average of Numbers findAverage(...numbers)", () => {
  
    it("returns the average of 4, 5, 2", () => {
        expect(findAverage(4,5,2)).to.equal(3.67);
    })
  
    it("returns the average of 0, -1, -2", () => {
      expect(findAverage(0,-1,-2)).to.equal(-1);
    })
  
    it("returns the average of 3, 1, 1000", () => {
      expect(findAverage(3,1,1000)).to.equal(334.67);
    })
  
    it("returns the average of 2, 2, 2", () => {
      expect(findAverage(2,2,2)).to.equal(2);
    })
  
    it("returns the average of -1, -1, -1", () => {
      expect(findAverage(-1,-1,-1)).to.equal(-1);
    })
  
    it("returns the average of 0, 0, 0", () => {
      expect(findAverage(0,0,0)).to.equal(0);
    })
  
    it("returns the average of 0, 7, 8, 9", () => {
      expect(findAverage(0,7,8,9)).to.equal(6);
    })
  
    it("returns the average of 3, 6, 2, 4, 1", () => {
      expect(findAverage(3,6,2,4,1)).to.equal(3.20);
    })
  
    it("returns 'This function expects at least one argument'", () => {
      expect(() => findAverage()).to.throw();
    })
  
    it("returns 'This function expects an integer'", () => {
      expect(() => findAverage("lala",NaN,null,undefined)).to.throw();
    })  
  })

  