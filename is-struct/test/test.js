/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

'use strict';

// MODULES //

var tape = require( 'tape' );
var structFactory = require( '@stdlib/dstructs/struct' );
var isStruct = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isStruct, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a struct instance', function test( t ) {
	var schema;
	var Struct;

	schema = [
		{
			'name': 'foo',
			'type': 'float64'
		}
	];
	Struct = structFactory( schema );

	t.equal( isStruct( new Struct() ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if not provided a `struct` instance', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isStruct( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
