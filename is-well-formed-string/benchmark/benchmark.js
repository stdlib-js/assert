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

/* eslint-disable no-new-wrappers, no-undefined, no-empty-function */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isBoolean = require( './../../is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var isWellFormedString = require( './../lib' );


// MAIN //

bench( pkg+'::primitives', function benchmark( b ) {
	var strs;
	var bool;
	var i;

	strs = [
		'',
		'\uDBFF',
		'Hello World',
		'3.14',
		'\uDBFF\uDBFF',
		-4.0,
		NaN,
		true,
		false,
		null,
		undefined
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isWellFormedString( strs[ i % strs.length ] );
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

bench( pkg+'::objects', function benchmark( b ) {
	var strs;
	var bool;
	var i;

	strs = [
		[],
		{},
		function noop() {},
		new String( '' ),
		new String( '\uDBFF' ),
		new String( '\uDBFFFF\uDBFF' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isWellFormedString( strs[ i % strs.length ] );
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

bench( pkg+'::primitives:isPrimitive', function benchmark( b ) {
	var strs;
	var bool;
	var i;

	strs = [
		'',
		'\uDBFF',
		'Hello World',
		'3.14',
		'\uDBFF\uDBFF',
		-4.0,
		NaN,
		true,
		false,
		null,
		undefined
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isWellFormedString.isPrimitive( strs[ i % strs.length ] );
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

bench( pkg+'::objects:isPrimitive', function benchmark( b ) {
	var strs;
	var bool;
	var i;

	strs = [
		[],
		{},
		function noop() {},
		new String( '' ),
		new String( '\uDBFF' ),
		new String( '\uDBFFFF\uDBFF' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isWellFormedString.isPrimitive( strs[ i % strs.length ] );
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

bench( pkg+'::primitives:isObject', function benchmark( b ) {
	var strs;
	var bool;
	var i;

	strs = [
		'',
		'\uDBFF',
		'Hello World',
		'3.14',
		'\uDBFF\uDBFF',
		-4.0,
		NaN,
		true,
		false,
		null,
		undefined
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isWellFormedString.isObject( strs[ i % strs.length ] );
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

bench( pkg+'::objects:isObject', function benchmark( b ) {
	var strs;
	var bool;
	var i;

	strs = [
		[],
		{},
		function noop() {},
		new String( '' ),
		new String( '\uDBFF' ),
		new String( '\uDBFFFF\uDBFF' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isWellFormedString.isObject( strs[ i % strs.length ] );
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
