var assert = require('assert');
var parseNumbers = require('../index.js');

describe('parseNumbers', function() {
  it('should return 0123456789 when the input file is input.txt', function() {
    assert.equal('0123456789', parseNumbers('test/input.txt'));
  });

  it('should return 978 when the input file is input2.txt', function() {
    assert.equal('978', parseNumbers('test/input2.txt'));
  });

  it('should return an error when the input file is incorrect', function() {
    assert.equal('incorrect input file format', parseNumbers('test/input3.txt').message);
  });

  it('should return an error when the input file does not exists', function() {
    assert.equal('file not found', parseNumbers('test/notexists.txt').message);
  });
});
