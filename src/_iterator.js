/**
 * Compares two iterators using the given comparison function to compare the
 * yielded elements. If one of the iterators is a prefix of the other, the one
 * that is a prefix is considered smaller.
 *
 * @param {Function} compare
 * @param {Iterator} itA
 * @param {Iterator} itB
 * @return {number}
 */
const _iterator = (compare, itA, itB) => {
	// eslint-disable-next-line no-constant-condition
	while (true) {
		const a = itA.next();
		if (a.done) return itB.next().done ? 0 : -1;
		const b = itB.next();
		if (b.done) return 1;
		const d = compare(a.value, b.value);
		if (d !== 0) return d;
	}
};

export default _iterator;
