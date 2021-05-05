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
var Float64Array = require( '@stdlib/array/float64' );
var detect = require( './../lib' );


// VARIABLES //

var hasFloat64Array = ( typeof Float64Array === 'function' );


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

tape( 'if `Float64Array` is supported, detection result is `true`', function test( t ) {
	var mocked;
	if ( hasFloat64Array ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./float64array.js': Mock,
		'@stdlib/assert/is-float64array': isArray
	});
	t.strictEqual( mocked(), true, 'detection result is `true` (mocked)' );

	t.end();

	function isArray() {
		return true;
	}

	function Mock() {
		return [
			1.0,
			3.14,
			-3.14,
			NaN
		];
	}
});

tape( 'if `Float64Array` is not supported, detection result is `false`', function test( t ) {
	var mocked;
	if ( hasFloat64Array ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./float64array.js': {}
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	mocked = proxyquire( './../lib/main.js', {
		'./float64array.js': Mock1
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	mocked = proxyquire( './../lib/main.js', {
		'./float64array.js': Mock2,
		'@stdlib/assert/is-float64array': isArray
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	mocked = proxyquire( './../lib/main.js', {
		'./float64array.js': Mock3,
		'@stdlib/assert/is-float64array': isArray
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	mocked = proxyquire( './../lib/main.js', {
		'./float64array.js': Mock4
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	t.end();

	function isArray() {
		return true;
	}

	function Mock1() {
		// Not a typed array:
		return [];
	}

	function Mock2() {
		return [ 0.0, 0.0, 0.0, NaN ];
	}

	function Mock3() {
		return [ 1.0, 3.14, -3.14, 0.0 ];
	}

	function Mock4() {
		throw new Error( 'beep' );
	}
});
