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
var isString = require( './../lib/object.js' );


// VARIABLES //

var opts = {
	'skip': !hasSymbols()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isString, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a string object', function test( t ) {
	t.equal( isString( new String( 'a' ) ), true, 'returns true' ); // eslint-disable-line no-new-wrappers
	t.end();
});

tape( 'the function returns `false` if provided a primitive string', function test( t ) {
	t.equal( isString( 'a' ), false, 'returns false' );
	t.end();
});

tape( 'if `Symbol.toStringTag` is supported, the function guards against objects masquerading as `String` objects', opts, function test( t ) {
	var isString;
	var mock;

	isString = proxyquire( './../lib/object.js', {
		'./../../has-tostringtag-support': detect
	});

	mock = {
		'toString': toString,
		'valueOf': valueOf
	};
	if ( hasToStringTag() ) {
		mock[ Symbol.toStringTag ] = 'String';
	}
	t.equal( isString( mock ), false, 'returns false' );
	t.end();

	function detect() {
		return true;
	}
	function toString() {
		return 'a';
	}
	function valueOf() {
		return 'a';
	}
});

tape( 'if `Symbol.toStringTag` is not supported, the function attempts to determine the native class', function test( t ) {
	var isString = proxyquire( './../lib/object.js', {
		'./../../has-tostringtag-support': detect
	});

	t.equal( isString( new String( 'a' ) ), true, 'returns true' ); // eslint-disable-line no-new-wrappers
	t.equal( isString( {} ), false, 'returns false' );

	t.end();

	function detect() {
		return false;
	}
});

tape( 'the function returns `false` if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		true,
		void 0,
		[],
		{},
		new Date(),
		/./,
		new RegExp( '.' ), // eslint-disable-line prefer-regex-literals
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isString( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
