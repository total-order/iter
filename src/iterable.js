import _iterator from './_iterator.js';

/**
 * Compile a function that compares two iterables whose yielded elements are
 * compared using the given comparison function.
 *
 * @param {Function} compare
 * @return {Function}
 */
const iterable = (compare) => {
	/**
	 * Compares two iterables. If one of the iterators is a prefix of the
	 * other, the one that is a prefix is considered smaller.
	 *
	 * @param {Iterable} A
	 * @param {Iterable} B
	 * @return {number}
	 */
	const increasing = (A, B) =>
		_iterator(compare, A[Symbol.iterator](), B[Symbol.iterator]());

	return increasing;
};

export default iterable;
