import test from 'ava';

import {iter} from '@iterable-iterator/iter';
import {range} from '@iterable-iterator/range';
import {increasing} from '@total-order/primitive';

import {iterable, iterator} from '#module';

const repr = (x) => JSON.stringify(x);

const eq = (x) => x === 0;
const lt = (x) => x < 0;
const gt = (x) => x > 0;

const macro = (t, compare, a, rel, b) => {
	t.true(rel(compare(a, b)));
};

macro.title = (title, compare, a, rel, b) =>
	`${compare.name}(${title ?? `${repr(a)}, ${repr(b)}`}) ${rel.name} 0`;

const _iterableIncreasing = iterable(increasing);
const _iteratorIncreasing = iterator(increasing);
const iterableIncreasing = (a, b) => _iterableIncreasing(a, b);
const iterableDecreasing = (a, b) => _iterableIncreasing(b, a);
const iteratorIncreasing = (a, b) => _iteratorIncreasing(iter(a), iter(b));
const iteratorDecreasing = (a, b) => _iteratorIncreasing(iter(b), iter(a));

const fns = [
	{compare: iterableIncreasing, lt, gt},
	{compare: iterableDecreasing, lt: gt, gt: lt},
	{compare: iteratorIncreasing, lt, gt},
	{compare: iteratorDecreasing, lt: gt, gt: lt},
];

for (const {compare, lt, gt} of fns) {
	test(macro, compare, [], eq, []);
	test(macro, compare, [], lt, [0]);
	test(macro, compare, [0], gt, []);
	test(macro, compare, [0], eq, [0]);
	test(macro, compare, [0], lt, [1]);
	test(macro, compare, [1], gt, [0]);

	test(macro, compare, [1, 2], lt, [1, 2, 3]);
	test(macro, compare, [1, 3], gt, [1, 2, 3]);
	test(macro, compare, [1, 4], gt, [1, 2, 3]);

	test(macro, compare, [0, 6, 7, 8, 9], lt, [1, 6, 7, 8, 9]);
	test(macro, compare, [1, 6, 7, 8, 9], gt, [0, 6, 7, 8, 9]);

	test(macro, compare, [9, 8, 7, 6, 0], lt, [9, 8, 7, 6, 1]);
	test(macro, compare, [9, 8, 7, 6, 1], gt, [9, 8, 7, 6, 0]);

	test(macro, compare, [0, 6, 6, 6, 6], lt, [1, 7, 7, 7, 7]);
	test(macro, compare, [1, 6, 6, 6, 6], gt, [0, 7, 7, 7, 7]);

	test(macro, compare, [6, 6, 6, 6, 0], lt, [7, 7, 7, 7, 1]);
	test(macro, compare, [6, 6, 6, 6, 1], lt, [7, 7, 7, 7, 0]);

	test(macro, compare, '', eq, '');
	test(macro, compare, 'abc', gt, 'ab');
	test(macro, compare, 'ab', lt, 'abc');
	test(macro, compare, 'x', eq, 'x');
	test(macro, compare, 'abracadabra', eq, 'abracadabra');
	test(macro, compare, 'abracadabra', lt, 'abracadabraabracadabra');

	test('range(0), range(0)', macro, compare, range(0), eq, range(0));
	test('range(1, 10), range(10)', macro, compare, range(1, 10), gt, range(10));
	test('range(10), range(10)', macro, compare, range(10), eq, range(10));
	test(
		'range(10), range(MAX)',
		macro,
		compare,
		range(10),
		lt,
		range(Number.MAX_SAFE_INTEGER),
	);
	test(
		'range(MAX), range(10)',
		macro,
		compare,
		range(Number.MAX_SAFE_INTEGER),
		gt,
		range(10),
	);
}
