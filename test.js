/*!
 * array-reverse
 */

'use strict';

require('mocha');
let assert = require('assert');
let arrayReverse = require('./');

describe('reverse', function() {
  it('should throw an error if invalid arguments are passed', function() {
    assert.throws(function() {
      arrayReverse();
    }, /expected/i);

    assert.throws(function() {
      arrayReverse('reverse');
    }, /expected/i);

    assert.throws(function() {
      arrayReverse({ reverseArray: 'arrayReverse' });
    }, /expected/i);
  });

  it('should return the reverse element in the array:', function() {
    assert.deepEqual(arrayReverse(['a', 'b', 'c', 'd', 'e', 'f']),['f', 'e', 'd', 'c', 'b', 'a']);
    assert.deepEqual(arrayReverse(['a', 'b', 'c', 'd', 'e', 'f'], 1,1), ['a', 'b', 'c', 'd', 'e', 'f']);
  });

  it('should return the reverse element in the array given the indices:', function() {
    assert.deepEqual(arrayReverse(['a', 'b', 'c', 'd', 'e', 'f'], 0,3), ['d', 'c', 'b', 'a', 'e', 'f']);
    assert.deepEqual(arrayReverse(['a', 'b', 'c', 'd', 'e', 'f'], 1,4), ['a', 'e', 'd', 'c', 'b', 'f']);
  });

  it('should return null if the array has no elements', function() {
    assert.strictEqual(arrayReverse([]), null);
    assert.strictEqual(arrayReverse([], 3), null);
  });
});
