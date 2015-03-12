
For loops are dumb.

When iterating over multiple arrays, you should be able to use forEach/map/etc.

Call this function to turn multiple arrays into one array.

```js
var combine = require('combine-arrays')

var ary1 = ['what', 'what', 'in', 'the', 'butt']
var ary2 = ['ho', 'hi', 'hup', 'hurr', 'HAH', '...huh?']

var output = combine({
	first: ary1,
	second: ary2
})

console.log(output)
// [ { first: 'what', second: 'ho' },
//   { first: 'what', second: 'hi' },
//   { first: 'in', second: 'hup' },
//   { first: 'the', second: 'hurr' },
//   { first: 'butt', second: 'HAH' },
//   { first: undefined, second: '...huh?' } ]
```

```js
var combine = require('combine-arrays')

var output = combine([
	['a', 'ax', 'app', 'ache', 'anger'],
	['b', 'be', 'bin'],
	['c', 'ci', 'cat', 'cool', 'chant']
])

console.log(output)
// [ [ 'a', 'b', 'c' ],
//   [ 'ax', 'be', 'ci' ],
//   [ 'app', 'bin', 'cat' ],
//   [ 'ache', undefined, 'cool' ],
//   [ 'anger', undefined, 'chant'] ]
```

License
======

[WTFPL](http://wtfpl2.com)
