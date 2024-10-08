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

var bench = require( '@stdlib/bench' );
var Uint8Array = require( '@stdlib/array/uint8' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var Memory = require( '@stdlib/wasm/memory' );
var hasWebAssemblySupport = require( './../../has-wasm-support' );
var isBoolean = require( './../../is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var isWebAssemblyMemory = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasWebAssemblySupport()
};


// MAIN //

bench( pkg+'::true', opts, function benchmark( b ) {
	var values;
	var bool;
	var o;
	var i;

	o = {
		'initial': 0
	};

	values = [
		new Memory( o ),
		new Memory( o )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isWebAssemblyMemory( values[ i%values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::false', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		new Uint8Array( 10 ),
		new ArrayBuffer( 10 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isWebAssemblyMemory( values[ i%values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
