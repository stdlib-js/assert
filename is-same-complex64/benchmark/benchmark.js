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
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var isBoolean = require( './../../is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var isSameComplex64 = require( './../lib' );


// MAIN //

bench( pkg+'::true', function benchmark( b ) {
	var values;
	var bool;
	var v;
	var i;

	values = [
		new Complex64( 5.0, 3.0 ),
		new Complex64( NaN, NaN ),
		new Complex64( 0.0, -0.0 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = values[ i%values.length ];
		bool = isSameComplex64( v, v );
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
	var values1;
	var values2;
	var bool;
	var v1;
	var v2;
	var i;

	values1 = [
		new Complex64( 5.0, 3.0 ),
		new Complex64( NaN, NaN ),
		new Complex64( 0.0, -0.0 ),
		3.0,
		NaN
	];
	values2 = [
		new Complex64( 5.0, -3.0 ),
		new Complex64( NaN, 2.0 ),
		new Complex64( 0.0, 10.0 ),
		-3.0,
		5.0
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v1 = values1[ i%values1.length ];
		v2 = values2[ i%values2.length ];
		bool = isSameComplex64( v1, v2 );
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
