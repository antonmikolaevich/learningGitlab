import {NumbersValidator} from './app/numbers-validator.js';
import {expect} from 'chai';

describe('isNumberEven tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with an even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided with an odd number', () => {
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.be.equal(false);
  });

  it('should return true when provided with 0', () => {
    const validationResults = validator.isNumberEven(0);
    expect(validationResults).to.be.equal(true);
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });

  it('should throw an error when provided with undefined', () => {
    expect(() => {
      validator.isNumberEven(undefined);
    }).to.throw('[undefined] is not of type "Number" it is of type "undefined"');
  });

  it('should throw an error when provided with null', () => {
    expect(() => {
      validator.isNumberEven(null);
    }).to.throw('[null] is not of type "Number" it is of type "object"');
  });

  it('should throw an error when provided with boolean', () => {
    expect(() => {
      validator.isNumberEven(true);
    }).to.throw('[true] is not of type "Number" it is of type "boolean"');
  });

  it('should throw an error when provided with an array', () => {
    expect(() => {
      validator.isNumberEven([1, 2]);
    }).to.throw('[1,2] is not of type "Number" it is of type "object"');
  });

  it('should throw an error when provided with an object', () => {
    expect(() => {
      validator.isNumberEven({1: 2});
    }).to.throw('[[object Object]] is not of type "Number" it is of type "object"');
  });
});

