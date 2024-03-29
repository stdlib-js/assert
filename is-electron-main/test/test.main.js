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
var ENV = require( '@stdlib/process/env' );
var isElectronMain = require( './../lib/main.js' );


// FIXTURES //

function Process() {
	this.type = 'browser';
	this.versions = {
		'electron': '1.0.0',
		'chrome': '42.1.34'
	};
	this.env = ENV;
	return this;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isElectronMain, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if runtime is the main Electron process', function test( t ) {
	var isElectronMain;
	var proc;
	var bool;

	proc = new Process();

	isElectronMain = proxyquire( './../lib/main.js', {
		'./../../is-electron': true,
		'./process.js': proc
	});

	bool = isElectronMain();
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` if runtime is not the main Electron process (not Electron)', function test( t ) {
	var isElectronMain;
	var proc;
	var bool;

	proc = new Process();

	isElectronMain = proxyquire( './../lib/main.js', {
		'./../../is-electron': false,
		'./process.js': proc
	});

	bool = isElectronMain();
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if runtime is not the main Electron process (process type does not equal `browser`)', function test( t ) {
	var isElectronMain;
	var proc;
	var bool;

	proc = new Process();
	proc.type = 'renderer';

	isElectronMain = proxyquire( './../lib/main.js', {
		'./../../is-electron': true,
		'./process.js': proc
	});

	bool = isElectronMain();
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});
