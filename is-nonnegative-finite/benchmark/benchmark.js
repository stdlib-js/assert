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

/* eslint-disable no-empty-function */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var Number = require( '@stdlib/number/ctor' );
var isBoolean = require( './../../is-boolean' ).isPrimitive;
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var pkg = require( './../package.json' ).name;
var isNonNegativeFinite = require( './../lib' );


// MAIN //

bench( pkg+'::true,primitives', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		5.0,
		4.0,
		3.14
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isNonNegativeFinite( values[ i % values.length ] );
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

bench( pkg+'::false,primitives', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		-5.0,
		-4.0,
		NaN,
		true,
		false,
		null,
		PINF,
		NINF,
		void 0
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isNonNegativeFinite( values[ i % values.length ] );
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

bench( pkg+'::true,objects', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		new Number( 2.0 ),
		new Number( 3.14 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isNonNegativeFinite( values[ i % values.length ] );
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

bench( pkg+'::false,objects', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		[],
		{},
		function noop() {},
		new Number( -3.0 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isNonNegativeFinite( values[ i % values.length ] );
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

bench( pkg+'::true,primitives:isPrimitive', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		5.0,
		4.0,
		3.14
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isNonNegativeFinite.isPrimitive( values[ i % values.length ] );
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

bench( pkg+'::false,primitives:isPrimitive', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		-5.0,
		-4.0,
		NaN,
		true,
		false,
		null,
		void 0,
		PINF,
		NINF
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isNonNegativeFinite.isPrimitive( values[ i % values.length ] );
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

bench( pkg+'::false,objects:isPrimitive', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		[],
		{},
		function noop() {},
		new Number( 2.0 ),
		new Number( 3.14 ),
		new Number( -3.0 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isNonNegativeFinite.isPrimitive( values[ i % values.length ] );
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

bench( pkg+'::false,primitives:isObject', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		5.0,
		4.0,
		3.14,
		-5.0,
		-4.0,
		NaN,
		true,
		false,
		null,
		void 0,
		PINF,
		NINF
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isNonNegativeFinite.isObject( values[ i % values.length ] );
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

bench( pkg+'::true,objects:isObject', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		new Number( 2.0 ),
		new Number( 3.14 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isNonNegativeFinite.isObject( values[ i % values.length ] );
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

bench( pkg+'::false,objects:isObject', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		[],
		{},
		function noop() {},
		new Number( -3.0 ),
		new Number( PINF )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isNonNegativeFinite.isObject( values[ i % values.length ] );
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
