---
title: 'Writing Clean Code'
pubDate: '2026-06-14'
categories: ['Programming']
draft: false
heroImage: '../imgs/code.webp'
---

A few notes on code readability.

## Name things well

Bad:

```js
const d = 86400;
function f(x) { return x * d; }
```

Good:

```js
const SECONDS_PER_DAY = 86400;

function daysToSeconds(days) {
  return days * SECONDS_PER_DAY;
}
```

## Keep functions small

> A function should do one thing, do it well, and do it only.

Inline example: prefer `array.map()` over manual `for` loops when transforming data.

## Shell example

```bash
npm run build && npm run preview
```

## Diffs

```diff
- const result = data.filter(x => x).map(x => x * 2);
+ const doubled = data.filter(Boolean).map(double);
```
