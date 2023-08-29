import {NumbersValidator} from './app/numbers-validator.js';
import {expect} from 'chai';

describe('isAllNumbers tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided an array with numbers only', () => {
    const arrayOfNumbers = [2, 7, 12, 17, 1, 55, 32, 10];
    expect(validator.isAllNumbers(arrayOfNumbers)).to.be.eql(true);
  });

  it('should return true when provided an array containing not only numbers', () => {
    const arrayOfNumbers = [2, 7, '12', 17, 1, 55, 32, 10];
    expect(validator.isAllNumbers(arrayOfNumbers)).to.be.eql(false);
  });

  it('should throw an error when provided with a string', () => {
    expect(() => {
      validator.isAllNumbers('string');
    }).to.throw('[string] is not an array');
  });
});

