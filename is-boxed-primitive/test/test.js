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
var hasSymbolSupport = require( './../../has-symbol-support' );
var Number = require( '@stdlib/number/ctor' );
var Symbol = require( '@stdlib/symbol/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var Object = require( '@stdlib/object/ctor' );
var isBoxedPrimitive = require( './../lib' );


// VARIABLES //

var hasSymbols = hasSymbolSupport();
var opts = {
	'skip': !hasSymbols
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isBoxedPrimitive, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a boxed primitive', function test( t ) {
	var values;
	var i;

	values = [
		new Boolean(), // eslint-disable-line no-new-wrappers
		new String(), // eslint-disable-line no-new-wrappers
		new Number() // eslint-disable-line no-new-wrappers
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isBoxedPrimitive( values[i] ), true, 'returns true' );
	}
	t.end();
});

tape( 'the function returns `true` if provided a boxed `Symbol`', opts, function test( t ) {
	t.equal( isBoxedPrimitive( Object( Symbol( 'symbol' ) ) ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if provided a primitive `Symbol`', opts, function test( t ) {
	t.equal( isBoxedPrimitive( Symbol( 'symbol' ) ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided a boxed primitive', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		3.14,
		false,
		function noop() {},
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isBoxedPrimitive( values[i] ), false, 'returns false for value: '+values[i] );
	}
	t.end();
});
