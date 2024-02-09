:roll_of_paper: [@total-order/iter](https://total-order.github.io/iter)
==

Iterable and Iterator comparison functions for JavaScript.
See [docs](https://total-order.github.io/iter/index.html).

```js
import {range} from '@iterable-iterator/range';
import {increasing} from '@total-order/primitive';
import {iterable} from '@total-order/iter';

const order = iterable(increasing);

order(range(Number.MAX_SAFE_INTEGER), range(10)) > 0; // true
```

[![License](https://img.shields.io/github/license/total-order/iter.svg)](https://raw.githubusercontent.com/total-order/iter/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@total-order/iter.svg)](https://www.npmjs.org/package/@total-order/iter)
[![Tests](https://img.shields.io/github/workflow/status/total-order/iter/ci:test?event=push&label=tests)](https://github.com/total-order/iter/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/total-order/iter.svg)](https://github.com/total-order/iter/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/total-order/iter.svg)](https://github.com/total-order/iter/issues)
[![Downloads](https://img.shields.io/npm/dm/@total-order/iter.svg)](https://www.npmjs.org/package/@total-order/iter)

[![Code issues](https://img.shields.io/codeclimate/issues/total-order/iter.svg)](https://codeclimate.com/github/total-order/iter/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/total-order/iter.svg)](https://codeclimate.com/github/total-order/iter/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/total-order/iter/main.svg)](https://codecov.io/gh/total-order/iter)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/total-order/iter.svg)](https://codeclimate.com/github/total-order/iter/trends/technical_debt)
[![Documentation](https://total-order.github.io/iter/badge.svg)](https://total-order.github.io/iter/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@total-order/iter)](https://bundlephobia.com/result?p=@total-order/iter)
