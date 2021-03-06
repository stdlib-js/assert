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

var vm = require( 'vm' ); // TODO: handle in-browser tests
var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var inherit = require( '@stdlib/utils/inherit' );
var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var IS_BROWSER = require( './../../is-browser' );
var isTypedArray = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isTypedArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a typed array', function test( t ) {
	var values;
	var i;

	values = [
		new Int8Array( 10 ),
		new Uint8Array( 10 ),
		new Uint8ClampedArray( 10 ),
		new Int16Array( 10 ),
		new Uint16Array( 10 ),
		new Int32Array( 10 ),
		new Uint32Array( 10 ),
		new Float32Array( 10 ),
		new Float64Array( 10 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isTypedArray( values[i] ), true, 'returns true when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `true` if provided a typed array (older environments)', function test( t ) {
	var isTypedArray;
	var values;
	var i;

	isTypedArray = proxyquire( './../lib/main.js', {
		'./../../has-float64array-support': hasSupport
	});

	values = [
		new Int8Array( 10 ),
		new Uint8Array( 10 ),
		new Uint8ClampedArray( 10 ),
		new Int16Array( 10 ),
		new Uint16Array( 10 ),
		new Int32Array( 10 ),
		new Uint32Array( 10 ),
		new Float32Array( 10 ),
		new Float64Array( 10 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isTypedArray( values[i] ), true, 'returns true when provided '+values[i] );
	}
	t.end();

	function hasSupport() {
		return false;
	}
});

tape( 'the function returns `true` if an environment does not support the abstract TypedArray class (e.g., IE 11)', function test( t ) {
	var isTypedArray;
	var values;
	var i;

	isTypedArray = proxyquire( './../lib/main.js', {
		'@stdlib/utils/get-prototype-of': getPrototypeOf
	});

	values = [
		new Int8Array( 10 ),
		new Uint8Array( 10 ),
		new Uint8ClampedArray( 10 ),
		new Int16Array( 10 ),
		new Uint16Array( 10 ),
		new Int32Array( 10 ),
		new Uint32Array( 10 ),
		new Float32Array( 10 ),
		new Float64Array( 10 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isTypedArray( values[i] ), true, 'returns true when provided '+values[i] );
	}
	t.end();

	function getPrototypeOf() {
		// Return an anonymous function:
		return function () {}; // eslint-disable-line func-names
	}
});

tape( 'the function returns `true` if provided an object inheriting from a typed array', function test( t ) {
	function CustomArray( data ) {
		var i;
		for ( i = 0; i < data.length; i++ ) {
			this[ i ] = data[ i ];
		}
		return this;
	}

	inherit( CustomArray, Float64Array );

	t.strictEqual( isTypedArray( new CustomArray( [ 5.0, 3.0 ] ) ), true, 'returns true when provided a value which inherits from a typed array' );
	t.end();
});

tape( 'the function returns `true` if provided a typed array from a different realm', opts, function test( t ) {
	var arr = vm.runInNewContext( 'new Float64Array( [ 5.0, 3.0 ] )' );
	t.strictEqual( isTypedArray( arr ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if provided an object from a different realm which inherits from a typed array', opts, function test( t ) {
	var arr = vm.runInNewContext( 'function Arr() { return this; }; Arr.prototype = Object.create( Float64Array.prototype ); Arr.prototype.constructor = Arr; new Arr( [ 5.0, 3.0 ] );' );
	t.strictEqual( isTypedArray( arr ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided a typed array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isTypedArray( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
