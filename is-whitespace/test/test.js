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

var tape = require( 'tape' );
var isWhitespace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isWhitespace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a string containing all white space characters', function test( t ) {
	var values;
	var i;

	values = [
		'\r',
		'\n',
		' ',
		'\t',
		'\v',
		'\u0009',
		'\u000A',
		'\u000B',
		'\u000C',
		'\u000D',
		'\u0020',
		'\u0085',
		'\u00A0',
		'\u1680',
		'\u2000',
		'\u2001',
		'\u2002',
		'\u2003',
		'\u2004',
		'\u2005',
		'\u2006',
		'\u2007',
		'\u2008',
		'\u2009',
		'\u200A',
		'\u2028',
		'\u2029',
		'\u202F',
		'\u205F',
		'\u3000',
		'\uFEFF',
		'                '
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isWhitespace( values[i] ), true, 'returns true when provided ' + values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if not provided a string containing all white space characters', function test( t ) {
	var values;
	var i;

	values = [
		'',
		'beep boop',
		new String( '         ' ), // eslint-disable-line no-new-wrappers
		5,
		null,
		NaN,
		undefined,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isWhitespace( values[i] ), false, 'returns false when provided ' + values[i] );
	}
	t.end();
});
