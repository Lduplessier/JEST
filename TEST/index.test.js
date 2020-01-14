var mathlib = require('./../SRC/index.js');

  describe('Sum', function() {
    it('should return 4 when given 2 and 2', function(){
      expect(mathlib.Sum(2,2)).toBe(4);
    });
  });
  describe('Sub', function(){
    it('should return 2 when given 4 and 2', function(){
      expect(mathlib.Sub(4,2)).toBe(2);
    });
  });
  describe('Mult', function(){
    it('should return 4 when given 2 and 2', function(){
    expect(mathlib.Mult(2,2)).toBe(4);
  });
});