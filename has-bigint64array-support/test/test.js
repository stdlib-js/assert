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
var proxyquire = require( 'proxyquire' );
var detect = require( './../lib' );


// VARIABLES //

var hasBigInt64Array = ( typeof BigInt64Array === 'function' ); // eslint-disable-line stdlib/require-globals
var MAX_FLOAT64_INTEGER = '9007199254740991'; // 2^53-1
var MAX_FLOAT64_INTEGER_P2 = '9007199254740993';


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof detect, 'function', 'main export is a function' );
	t.end();
});

tape( 'feature detection result is a boolean', function test( t ) {
	t.strictEqual( typeof detect(), 'boolean', 'detection result is a boolean' );
	t.end();
});

tape( 'if `BigInt64Array` is supported, detection result is `true`', function test( t ) {
	var mocked;
	if ( hasBigInt64Array ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./bigint64array.js': Mock,
		'./../../is-bigint': isTrue,
		'./../../is-bigint64array': isTrue
	});
	t.strictEqual( mocked(), true, 'detection result is `true` (mocked)' );

	t.end();

	function isTrue() {
		return true;
	}

	function Mock() {
		return [
			MAX_FLOAT64_INTEGER,
			MAX_FLOAT64_INTEGER_P2
		];
	}
});

tape( 'if `BigInt64Array` is not supported, detection result is `false`', function test( t ) {
	var mocked;
	if ( hasBigInt64Array ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./bigint64array.js': {}
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	mocked = proxyquire( './../lib/main.js', {
		'./bigint64array.js': Mock
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	t.end();

	function Mock() {
		throw new Error( 'beep' );
	}
});
