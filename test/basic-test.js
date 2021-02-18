  
var assert = require('assert');

var expect = require('chai').expect;
var should = require('chai').should();

describe('basic test', function () {

    before(() => {
        console.log("before hook")
    });
    after(() => {
        console.log("after hook")
    });
    it('should be a number ', function(){
      const count = 1;
      expect(count).to.be.a('number')
    });

    it('should equal to 2 ', function(){
      var count = 2;
      count.should.equal(2);
    });

});