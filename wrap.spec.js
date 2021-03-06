const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Returns each line to be maxLen or less', () => {
    const result = wrap(
      'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
      20
    ).split('\n');
    expect(result[0].length).to.not.be.above(20);
  });
});
