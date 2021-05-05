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
var detect = require( './../lib' );


// VARIABLES //

var hasSharedArrayBuffer = ( typeof SharedArrayBuffer === 'function' ); // eslint-disable-line stdlib/require-globals


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

tape( 'if `SharedArrayBuffer` is supported, detection result is `true`', function test( t ) {
	var mocked;
	if ( hasSharedArrayBuffer ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	function Mock( len ) {
		var out;
		var i;

		out = new Array( len/8 ); // we assume evenly divisible
		for ( i = 0; i < out.length; i++ ) {
			out[ i ] = 0;
		}
		out.byteLength = len;
		out.slice = slice;
		return out;

		function slice( start, end ) {
			var arr;
			var i;

			arr = [];
			for ( i = start; i < end; i++ ) {
				arr.push( out[ i ] );
			}
			arr.byteLength = arr.length;
			arr.slice = slice;
			return arr;
		}
	}

	mocked = proxyquire( './../lib/main.js', {
		'./sharedarraybuffer.js': Mock,
		'@stdlib/assert/is-sharedarraybuffer': isBuffer
	});
	t.strictEqual( mocked(), true, 'detection result is `true` (mocked)' );

	t.end();

	function isBuffer() {
		return true;
	}
});

tape( 'if `SharedArrayBuffer` is not supported, detection result is `false` (no SharedArrayBuffer global function)', function test( t ) {
	var mocked;
	if ( hasSharedArrayBuffer ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./sharedarraybuffer.js': {}
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );
	t.end();
});

tape( 'if `SharedArrayBuffer` is not supported, detected result is `false` (constructor throws)', function test( t ) {
	var mocked;
	if ( hasSharedArrayBuffer ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./sharedarraybuffer.js': mock
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );
	t.end();

	function mock() {
		throw new Error( 'beep' );
	}
});

tape( 'if `SharedArrayBuffer` is not supported, detected result is `false` (no slice method)', function test( t ) {
	var mocked;
	if ( hasSharedArrayBuffer ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	function Mock( len ) {
		var out;
		var i;

		out = new Array( len/8 ); // we assume evenly divisible
		for ( i = 0; i < out.length; i++ ) {
			out[ i ] = 0;
		}
		out.byteLength = len;
		return out;
	}
	mocked = proxyquire( './../lib/main.js', {
		'./sharedarraybuffer.js': Mock,
		'@stdlib/assert/is-sharedarraybuffer': isBuffer
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );
	t.end();

	function isBuffer() {
		return true;
	}
});

tape( 'if `SharedArrayBuffer` is not supported, detected result is `false` (no byteLength property)', function test( t ) {
	var mocked;
	if ( hasSharedArrayBuffer ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	function Mock( len ) {
		var out;
		var i;

		out = new Array( len/8 ); // we assume evenly divisible
		for ( i = 0; i < out.length; i++ ) {
			out[ i ] = 0;
		}
		out.slice = slice;
		return out;

		function slice( start, end ) {
			var arr;
			var i;

			arr = [];
			for ( i = start; i < end; i++ ) {
				arr.push( out[ i ] );
			}
			arr.slice = slice;
			return arr;
		}
	}
	mocked = proxyquire( './../lib/main.js', {
		'./sharedarraybuffer.js': Mock,
		'@stdlib/assert/is-sharedarraybuffer': isBuffer
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );
	t.end();

	function isBuffer() {
		return true;
	}
});
