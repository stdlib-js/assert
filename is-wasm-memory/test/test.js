/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var Uint8Array = require( '@stdlib/array/uint8' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var hasWasmSupport = require( './../../has-wasm-support' );
var Memory = require( '@stdlib/wasm/memory' );
var isWebAssemblyMemory = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasWasmSupport()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isWebAssemblyMemory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a WebAssembly memory instance', opts, function test( t ) {
	var mem = new Memory({
		'initial': 0
	});
	t.strictEqual( isWebAssemblyMemory( mem ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if not provided a WebAssembly memory instance', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		{},
		function noop() {},
		new Uint8Array( 10 ),
		new ArrayBuffer( 10 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isWebAssemblyMemory( values[i] ), false, 'returns expected value when provided ' + values[i] );
	}
	t.end();
});
