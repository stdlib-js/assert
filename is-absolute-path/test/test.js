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
var proxyquire = require( 'proxyquire' );
var isAbsolutePath = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isAbsolutePath, 'function', 'main export is a function' );
	t.end();
});

tape( 'if platform is POSIX, main export is method to test if a string is a POSIX absolute path', function test( t ) {
	var isAbsolutePath = proxyquire( './../lib', {
		'./../../is-windows': false
	});
	t.equal( isAbsolutePath, isAbsolutePath.posix, 'equals posix method' );
	t.end();
});

tape( 'if platform is Windows, main export is method to test if a string is a Windows absolute path', function test( t ) {
	var isAbsolutePath = proxyquire( './../lib', {
		'./../../is-windows': true
	});
	t.equal( isAbsolutePath, isAbsolutePath.win32, 'equals win32 method' );
	t.end();
});

tape( 'attached to the main export is a method to test if a string is a POSIX absolute path', function test( t ) {
	t.equal( typeof isAbsolutePath.posix, 'function', 'has a posix method' );
	t.end();
});

tape( 'attached to the main export is a method to test if a string is a Windows absolute path', function test( t ) {
	t.equal( typeof isAbsolutePath.win32, 'function', 'has a win32 method' );
	t.end();
});
