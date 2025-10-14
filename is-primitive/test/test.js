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
var hasBigIntSupport = require( './../../has-bigint-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var Number = require( '@stdlib/number/ctor' );
var BigInt = require( '@stdlib/bigint/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var Object = require( '@stdlib/object/ctor' );
var isPrimitive = require( './../lib' );


// VARIABLES //

var hasSymbols = hasSymbolSupport();
var hasBigInts = hasBigIntSupport();
var opts;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isPrimitive, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a primitive (ES5)', function test( t ) {
	var values;
	var i;

	values = [
		'',
		0,
		false,
		void 0,
		null
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isPrimitive( values[i] ), true, 'returns expected value' );
	}
	t.end();
});

opts = {
	'skip': !hasSymbols
};
tape( 'the function returns `true` if provided a `Symbol` (ES6/ES2015)', opts, function test( t ) {
	t.strictEqual( isPrimitive( Symbol( 'symbol' ) ), true, 'returns expected value' );
	t.end();
});

opts = {
	'skip': !hasBigInts
};
tape( 'the function returns `true` if provided a `BigInt` (ES2020)', opts, function test( t ) {
	t.strictEqual( isPrimitive( BigInt( '1' ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if not provided a primitive', function test( t ) {
	var values;
	var i;

	values = [
		new Boolean(),
		new String(),
		new Array(), // eslint-disable-line stdlib/no-new-array, no-array-constructor
		new Object(),
		new Number(),
		function noop() {},
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isPrimitive( values[i] ), false, 'returns false for value: '+values[i] );
	}
	t.end();
});
