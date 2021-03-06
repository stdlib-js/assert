/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var arrowFunctionSupport = require( './../../has-arrow-function-support' );
var isArrowFunction = require( './../lib' );


// VARIABLES //

var hasArrowFunctions = arrowFunctionSupport();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isArrowFunction, 'function', 'main export is a function' );
	t.end();
});

// Run arrow function tests if environment supports `() => {}`...
if ( hasArrowFunctions ) {
	require( './es2015-arrow-function' ); // eslint-disable-line stdlib/no-unassigned-require
}

tape( 'the function returns `false` if provided a function trying to impersonate an arrow function', function test( t ) {
	function pretend() {}
	pretend.toString = function toString() {
		return '() => {}';
	};
	t.strictEqual( isArrowFunction( pretend ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided a function which is not an arrow function', function test( t ) {
	// eslint-disable-next-line func-style, func-names
	var beep = function () {
		return 'boop';
	};
	t.strictEqual( isArrowFunction( beep ), false, 'returns false' );

	beep = function beep() {
		return 'boop';
	};
	t.strictEqual( isArrowFunction( beep ), false, 'returns false' );

	function baz() {
		return 'boop';
	}
	t.strictEqual( isArrowFunction( baz ), false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if not provided a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		void 0,
		true,
		false,
		null,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isArrowFunction( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
