import {NumbersValidator} from './app/numbers-validator.js';
import {expect} from 'chai';

describe('isInteger tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided an Integer', () => {
    const Integer = 2;
    expect(validator.isInteger(Integer)).to.be.eql(true);
  });
  it('should return false when provided an Integer', () => {
    const notInteger = 3.5;
    expect(validator.isInteger(notInteger)).to.be.eql(false);
  });
  it('should throw an error when provided with a string', () => {
    expect(() => {
      validator.isInteger('string');
    }).to.throw('[string] is not a number');
  });
});

