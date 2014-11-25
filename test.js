var test = require('tape')
var combine = require('./index')

test('basic functionality: the example from the readme', function(t) {
	var ary1 = ['what', 'what', 'in', 'the', 'butt']
	var ary2 = ['ho', 'hi', 'hup', 'hurr', 'HAH', '...huh?']

	var output = combine({
		first: ary1,
		second: ary2
	})

	t.deepEqual(output, [ { first: 'what', second: 'ho' },
	     { first: 'what', second: 'hi' },
	     { first: 'in', second: 'hup' },
	     { first: 'the', second: 'hurr' },
	     { first: 'butt', second: 'HAH' },
	     { first: undefined, second: '...huh?' } ])

	t.end()
})

test('three arrays, one of them empty', function(t) {
	var output = combine({
		a: [ 'apple' ],
		b: ['bug', 'bubble'],
		c: []
	})

	t.deepEqual(output, [
		{ a: 'apple', b: 'bug', c: undefined },
		{ a: undefined, b: 'bubble', c: undefined }
	])

	t.end()
})

test('throw an error on non-array', function(t) {
	t.throws(function() {
		combine({
			a: [],
			b: null
		})
	}, /b is not an array/)

	t.throws(function() {
		combine({
			a: undefined,
			b: ['wat']
		})
	}, /a is not an array/)

	t.throws(function() {
		combine({
			a: 'HAH',
			b: ['wat']
		})
	}, /a is not an array/)

	t.end()
})
