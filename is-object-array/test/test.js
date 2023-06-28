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

'use strict';

// MODULES //

var tape = require( 'tape' );
var isObjectArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof isObjectArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tests for an array-like object containing only objects', function test( t ) {
	var arr;
	var obj;

	obj = {
		'type': 'object'
	};
	arr = [ obj, /.*/, {} ];
	t.equal( isObjectArray( arr ), true, 'returns true' );

	arr = [ 5.0, {}, new Date() ];
	t.equal( isObjectArray( arr ), false, 'returns false' );

	arr = {
		'length': 2,
		'0': {},
		'1': new Date()
	};
	t.equal( isObjectArray( arr ), true, 'returns true' );

	arr = [];
	t.equal( isObjectArray( arr ), false, 'returns false when provided an empty array' );

	t.end();
});
