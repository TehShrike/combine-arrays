
For loops are dumb.

When iterating over multiple arrays, you should be able to use forEach/map/etc.

Call this function to turn multiple arrays into one array.

	var combine = require('combine-arrays')

	var ary1 = ['what', 'what', 'in', 'the', 'butt']
	var ary2 = ['ho', 'hi', 'hup', 'HAH', '...huh?']

	var output = combine({
		first: ary1,
		second: ary2
	})

	console.log(output)
	//	[ { first: 'what', second: 'ho' },
	//   { first: 'what', second: 'hi' },
	//   { first: 'in', second: 'hup' },
	//   { first: 'the', second: 'hurr' },
	//   { first: 'butt', second: 'HAH' },
	//   { first: undefined, second: '...huh?' } ]


License
======

[WTFPL](http://wtfpl2.com)
