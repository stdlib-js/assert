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

var bench = require( '@stdlib/bench' );
var isBoolean = require( './../../is-boolean' ).isPrimitive;
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var pkg = require( './../package.json' ).name;
var isComplex128 = require( './../lib' );


// MAIN //

bench( pkg+'::true', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		new Complex128( 1.0, 2.0 ),
		new Complex128( 3.0, 4.0 ),
		new Complex128( 5.0, 6.0 ),
		new Complex128( 7.0, 8.0 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isComplex128( values[ i%values.length ] );
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
		'5',
		5,
		NaN,
		true,
		false,
		[],
		{}
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isComplex128( values[ i%values.length ] );
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
