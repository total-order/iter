import _iterator from './_iterator.js';

/**
 * Compile a function that compares two iterators whose yielded elements are
 * compared using the given comparison function.
 *
 * @param {Function} compare
 * @return {Function}
 */
const iterator = (compare) => {
	/**
	 * Compares two iterators. If one of the iterators is a prefix of the
	 * other, the one that is a prefix is considered smaller.
	 *
	 * @param {Iterator} itA
	 * @param {Iterator} itB
	 * @return {number}
	 */
	const increasing = (itA, itB) => _iterator(compare, itA, itB);

	return increasing;
};

export default iterator;
