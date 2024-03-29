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
var proxyquire = require( 'proxyquire' );
var hasIteratorSymbolSupport = require( './../../has-iterator-symbol-support' );
var isIterableLike = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isIterableLike, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `false` if not provided an iterable-like value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.equal( isIterableLike( values[i] ), false, 'returns expected value when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `true` if provided an iterable-like value (ES2015+/ES6+)', function test( t ) {
	if ( hasIteratorSymbolSupport() ) {
		t.equal( isIterableLike( [] ), true, 'returns expected value' );
	} else {
		t.ok( true, 'environment lacks iterator symbol support' );
	}
	t.end();
});

tape( 'in non-ES2015+/ES6+ environments, the function always returns `false`', function test( t ) {
	var isIterableLike;
	var values;
	var i;

	isIterableLike = proxyquire( './../lib/index.js', {
		'./../../has-iterator-symbol-support': hasSupport
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.equal( isIterableLike( values[i] ), false, 'returns expected value when provided '+values[i] );
	}
	t.end();

	function hasSupport() {
		return false;
	}
});
