'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(x = 0) {
  let sum = x;
  let isEmpty = false;

  const adder = (y) => {
    if (isEmpty) {
      sum = 0;
    }

    if (y === undefined) {
      isEmpty = true;

      return sum;
    }

    sum += y;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
