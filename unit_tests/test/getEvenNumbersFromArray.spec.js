import {NumbersValidator} from './app/numbers-validator.js';
import {expect} from 'chai';


describe('getEvenNumbersFromArray tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return an array of even numbers when provided an array with random numbers', () => {
    const arrayOfRandomNumbers = [2, 9, 12, 15, 1, 33, 11];
    expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers)).to.be.eql([2, 12]);
  });

  it('should throw an error when one or more elements of the array is not a number', () => {
    const randomArray = [2, 5, 'summer', 13, 20, 11];
    expect(() => validator.getEvenNumbersFromArray(randomArray)).to.throw(`2,5,summer,13,20,11] is not an array of "Numbers"`);
  });
  it('should throw an error when provided data is not an array', () => {
    const notArray = 'string';
    expect(() => validator.getEvenNumbersFromArray(notArray)).to.throw(`[string] is not an array of "Numbers"`);
  });
});
