const assert = require('assert');
const add = require('./add');

function test_add1() {
  assert.equal(add.add(1,2), 3, '1 + 2 = 3'); // ==
  assert.notEqual(add.add(1,2), 4, '1 + 2 != 4'); // !=

  assert.strictEqual(add.add(1,2), 3, '1 + 2 = 3'); // ===
  assert.notStrictEqual(add.add(1,2), 4, '1 + 2 != 4'); // !==

  // deepEqual 和 notDeepEqual 可以用来比较对象
  assert.deepEqual(add.add(1,2), 3, '1 + 2 = 3');
  assert.notDeepEqual(add.add(1,2), 4, '1 + 2 != 4');
}

function test_assert() {
  const a = [1,2,3,4,5];
  const b = a;
  const c = [1,2,3,4,5];
  assert.deepEqual(a, b, 'a == b');
  assert.deepEqual(a, c, 'a == c');
}

test_add1();
test_assert();
