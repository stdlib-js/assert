/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-new-wrappers */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Number = require( '@stdlib/number/ctor' );
var isInfinite = require( './../lib/object.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isInfinite, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a number object having an infinite value', function test( t ) {
	t.strictEqual( isInfinite( new Number( 1.0/0.0 ) ), true, 'returns true' );
	t.strictEqual( isInfinite( new Number( -1.0/0.0 ) ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if provided a primitive number, even if the number is an infinite value', function test( t ) {
	t.strictEqual( isInfinite( 1.0/0.0 ), false, 'returns false' );
	t.strictEqual( isInfinite( -1.0/0.0 ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided an infinite number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		1.0,
		-1.0,
		NaN,
		new Number( 1.0 ),
		new Number( -1.0 ),
		new Number( NaN ),
		null,
		true,
		false,
		void 0,
		[],
		{},
		new Date(),
		/./,
		new RegExp( '.' ),
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isInfinite( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
