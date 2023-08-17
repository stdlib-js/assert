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
var Complex64 = require( '@stdlib/complex/float32' );
var Complex128 = require( '@stdlib/complex/float64' );
var pkg = require( './../package.json' ).name;
var isComplexLike = require( './../lib' );


// MAIN //

bench( pkg+'::true', function benchmark( b ) {
	var values;
	var bool;
	var z;
	var N;
	var i;

	values = [
		new Complex128( 1.0, -1.0 ),
		new Complex64( 2.0, -2.0 ),
		{
			're': 3.0,
			'im': -3.0
		}
	];
	N = values.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = values[ i%N ];
		bool = isComplexLike( z );
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
	var z;
	var N;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		[],
		{}
	];
	N = values.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = values[ i%N ];
		bool = isComplexLike( z );
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
