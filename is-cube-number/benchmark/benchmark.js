/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var isBoolean = require( './../../is-boolean' ).isPrimitive;
var Number = require( '@stdlib/number/ctor' );
var pkg = require( './../package.json' ).name;
var isCubeNumber = require( './../lib' );


// MAIN //

bench( pkg+'::primitives,true', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		8,
		64,
		1,
		-27,
		-8,
		125,
		-1000,
		27
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isCubeNumber( values[ i % values.length ] );
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

bench( pkg+'::primitives,false', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		null,
		void 0,
		-6,
		7.25
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isCubeNumber( values[ i % values.length ] );
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

bench( pkg+'::objects,true', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		new Number( 8 ),
		new Number( 64 ),
		new Number( 1 ),
		new Number( -27 ),
		new Number( -8 ),
		new Number( 125 ),
		new Number( -1000 ),
		new Number( 27 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isCubeNumber( values[ i % values.length ] );
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

bench( pkg+'::objects,false', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		new Number( 5 ),
		new Number( NaN ),
		new Number( 3.14 ),
		new Number( -6 ),
		new Number( 7.25 ),
		[],
		{},
		function noop() {}
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isCubeNumber( values[ i % values.length ] );
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

bench( pkg+'::primitives:isPrimitive,true', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		8,
		64,
		1,
		-27,
		-8,
		125,
		-1000,
		27
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isCubeNumber.isPrimitive( values[ i % values.length ] );
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

bench( pkg+'::primitives:isPrimitive,false', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		null,
		void 0,
		-6,
		7.25
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isCubeNumber.isPrimitive( values[ i % values.length ] );
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

bench( pkg+'::objects:isPrimitive,false', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		new Number( 8 ),
		new Number( 64 ),
		new Number( 1 ),
		new Number( -27 ),
		new Number( -8 ),
		new Number( 125 ),
		new Number( -1000 ),
		new Number( 27 ),
		[],
		{},
		function noop() {}
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isCubeNumber.isPrimitive( values[ i % values.length ] );
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

bench( pkg+'::primitives:isObject,false', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		null,
		void 0,
		-6,
		7.25
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isCubeNumber.isObject( values[ i % values.length ] );
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

bench( pkg+'::objects:isObject,true', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		new Number( 8 ),
		new Number( 64 ),
		new Number( 1 ),
		new Number( -27 ),
		new Number( -8 ),
		new Number( 125 ),
		new Number( -1000 ),
		new Number( 27 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isCubeNumber.isObject( values[ i % values.length ] );
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

bench( pkg+'::objects:isObject,false', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		new Number( 5 ),
		new Number( NaN ),
		new Number( 3.14 ),
		new Number( -6 ),
		new Number( 7.25 ),
		[],
		{},
		function noop() {}
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isCubeNumber.isObject( values[ i % values.length ] );
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
