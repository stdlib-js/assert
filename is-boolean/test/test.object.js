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
var hasSymbols = require( './../../has-symbol-support' );
var hasToStringTag = require( './../../has-tostringtag-support' );
var Boolean = require( '@stdlib/boolean/ctor' );
var isBoolean = require( './../lib/object.js' );


// VARIABLES //

var opts = {
	'skip': !hasSymbols()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isBoolean, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a boolean object', function test( t ) {
	t.strictEqual( isBoolean( new Boolean( false ) ), true, 'returns expected value' );
	t.strictEqual( isBoolean( new Boolean( true ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided a primitive boolean', function test( t ) {
	t.strictEqual( isBoolean( true ), false, 'returns expected value' );
	t.strictEqual( isBoolean( false ), false, 'returns expected value' );
	t.end();
});

tape( 'if `Symbol.toStringTag` is supported, the function guards against objects masquerading as `Boolean` objects', opts, function test( t ) {
	var isBoolean;
	var mock;

	isBoolean = proxyquire( './../lib/object.js', {
		'./../../has-tostringtag-support': detect
	});

	mock = {
		'toString': toString,
		'valueOf': valueOf
	};
	if ( hasToStringTag() ) {
		mock[ Symbol.toStringTag ] = 'Boolean';
	}
	t.strictEqual( isBoolean( mock ), false, 'returns expected value' );
	t.end();

	function detect() {
		return true;
	}
	function toString() {
		return 'true';
	}
	function valueOf() {
		return true;
	}
});

tape( 'if `Symbol.toStringTag` is not supported, the function attempts to determine the native class', function test( t ) {
	var isBoolean = proxyquire( './../lib/object.js', {
		'./../../has-tostringtag-support': detect
	});

	t.strictEqual( isBoolean( new Boolean( true ) ), true, 'returns expected value' );
	t.strictEqual( isBoolean( {} ), false, 'returns expected value' );

	t.end();

	function detect() {
		return false;
	}
});

tape( 'the function returns `false` if not provided a boolean', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		5,
		NaN,
		void 0,
		[],
		{},
		new Date(),
		/./,
		new RegExp( '.' ), // eslint-disable-line prefer-regex-literals
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isBoolean( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
