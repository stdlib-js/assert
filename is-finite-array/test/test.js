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
var isFiniteArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isFiniteArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tests for an array-like object containing only finite numbers', function test( t ) {
	var arr;

	arr = [ 5.0, new Number( 5.0 ), -3.14 ];
	t.strictEqual( isFiniteArray( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': 2.0,
		'1': 1.0
	};
	t.strictEqual( isFiniteArray( arr ), true, 'returns true' );

	arr = [ 5.0, 2.3, 11.1, 1.0/0.0 ];
	t.strictEqual( isFiniteArray( arr ), false, 'returns false' );

	arr = [ 5.0, '3', null ];
	t.strictEqual( isFiniteArray( arr ), false, 'returns false' );

	t.end();
});

tape( 'the function provides a method to test for an array-like object containing only primitive finite numbers', function test( t ) {
	var arr;

	arr = [ 5.0, -0.0, 0.0, 3.14 ];
	t.strictEqual( isFiniteArray.primitives( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': 1.0,
		'1': -3.0
	};
	t.strictEqual( isFiniteArray.primitives( arr ), true, 'returns true' );

	arr = [ 5.0, -0.0, 0.0, 1.0/0.0 ];
	t.strictEqual( isFiniteArray.primitives( arr ), false, 'returns false' );

	arr = [ new Number( 5.0 ), 1.0, 1.0 ];
	t.strictEqual( isFiniteArray.primitives( arr ), false, 'returns false' );

	t.end();
});

tape( 'the function provides a method to test for an array-like object containing only `Number` objects having finite values', function test( t ) {
	var arr;

	arr = [ new Number( 5.0 ), new Number( -0.0 ), new Number( 0.0 ) ];
	t.strictEqual( isFiniteArray.objects( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': new Number( 2.0 ),
		'1': new Number( -3.0 )
	};
	t.strictEqual( isFiniteArray.objects( arr ), true, 'returns true' );

	arr = [ new Number( 5.0 ), new Number( -0.0 ), new Number( 1.0/0.0 ) ];
	t.strictEqual( isFiniteArray.objects( arr ), false, 'returns false' );

	arr = [ new Number( 5.0 ), 1.0, 1.0 ];
	t.strictEqual( isFiniteArray.objects( arr ), false, 'returns false' );

	arr = [ -5.0, 1.0, 1.0 ];
	t.strictEqual( isFiniteArray.objects( arr ), false, 'returns false' );

	t.end();
});
