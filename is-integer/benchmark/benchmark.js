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

/* eslint-disable no-new-wrappers, no-empty-function */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isBoolean = require( './../../is-boolean' ).isPrimitive;
var Number = require( '@stdlib/number/ctor' );
var pkg = require( './../package.json' ).name;
var isInteger = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': ( typeof Number.isInteger === 'undefined' )
};


// MAIN //

bench( pkg+'::primitives,true', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		5,
		4,
		1.0e308,
		-5,
		-4,
		1.0e308
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isInteger( values[ i % values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) || bool !== true ) {
		b.fail( 'should return true' );
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
		3.14,
		NaN,
		true,
		false,
		null,
		void 0
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isInteger( values[ i % values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) || bool !== false ) {
		b.fail( 'should return false' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::objects,true', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		new Number( 2.0 ),
		new Number( 3.0 ),
		new Number( 4.0 ),
		new Number( 1.0e308 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isInteger( values[ i % values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) || bool !== true ) {
		b.fail( 'should return true' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::objects,false', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		[],
		{},
		function noop() {},
		new Number( 3.14 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isInteger( values[ i % values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) || bool !== false ) {
		b.fail( 'should return false' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::primitives,true:isPrimitive', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		5,
		4,
		1.0e308,
		-5,
		-4,
		1.0e308
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isInteger.isPrimitive( values[ i % values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) || bool !== true ) {
		b.fail( 'should return true' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::primitives,false:isPrimitive', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isInteger.isPrimitive( values[ i % values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) || bool !== false ) {
		b.fail( 'should return false' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::objects,false:isPrimitive', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		[],
		{},
		function noop() {},
		new Number( 2.0 ),
		new Number( 3.0 ),
		new Number( 3.14 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isInteger.isPrimitive( values[ i % values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) || bool !== false ) {
		b.fail( 'should return false' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::primitives,false:isObject', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		5,
		4,
		3.14,
		-5,
		-4,
		NaN,
		true,
		false,
		null,
		void 0
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isInteger.isObject( values[ i % values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) || bool !== false ) {
		b.fail( 'should return false' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::objects,true:isObject', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		new Number( 2.0 ),
		new Number( 3.0 ),
		new Number( 4.0 ),
		new Number( 1.0e308 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isInteger.isObject( values[ i % values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) || bool !== true ) {
		b.fail( 'should return true' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::objects,false:isObject', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		[],
		{},
		function noop() {},
		new Number( 3.14 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isInteger.isObject( values[ i % values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) || bool !== false ) {
		b.fail( 'should return false' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::builtin,primitives,true', opts, function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		5,
		4,
		1.0e308,
		-5,
		-4,
		1.0e308
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = Number.isInteger( values[ i % values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool )|| bool !== true ) {
		b.fail( 'should return true' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::builtin,primitives,false', opts, function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = Number.isInteger( values[ i % values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) || bool !== false ) {
		b.fail( 'should return false' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
