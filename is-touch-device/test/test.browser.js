/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var noop = require( '@stdlib/utils/noop' );
var isTouchDevice = require( './../lib/browser.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isTouchDevice, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if the current environment is a touch device (`ontouchstart` handler)', function test( t ) {
	var isTouchDevice;
	var win;

	win = {
		'ontouchstart': noop
	};

	isTouchDevice = proxyquire( './../lib/browser.js', {
		'@stdlib/utils/global': getGlobal,
		'./../../is-browser': true
	});

	t.equal( isTouchDevice(), true, 'returns true' );
	t.end();

	function getGlobal() {
		return win;
	}
});

tape( 'the function returns `false` if the current environment is a touch device (no `ontouchstart` handler)', function test( t ) {
	var isTouchDevice;
	var win;

	win = {};

	isTouchDevice = proxyquire( './../lib/browser.js', {
		'@stdlib/utils/global': getGlobal,
		'./../../is-browser': true
	});

	t.equal( isTouchDevice(), false, 'returns false' );
	t.end();

	function getGlobal() {
		return win;
	}
});

tape( 'the function returns `true` if the current environment is a touch device (`DocumentTouch`)', function test( t ) {
	var isTouchDevice;
	var win;

	win = {
		'DocumentTouch': noop
	};
	win.document = new win.DocumentTouch();

	isTouchDevice = proxyquire( './../lib/browser.js', {
		'@stdlib/utils/global': getGlobal,
		'./../../is-browser': true
	});

	t.equal( isTouchDevice(), true, 'returns true' );
	t.end();

	function getGlobal() {
		return win;
	}
});

tape( 'the function returns `false` if the current environment is not a touch device (`DocumentTouch`)', function test( t ) {
	var isTouchDevice;
	var win;

	win = {
		'DocumentTouch': noop
	};
	win.document = {};

	isTouchDevice = proxyquire( './../lib/browser.js', {
		'@stdlib/utils/global': getGlobal,
		'./../../is-browser': true
	});

	t.equal( isTouchDevice(), false, 'returns false' );
	t.end();

	function getGlobal() {
		return win;
	}
});

tape( 'the function returns `true` if the current environment is a touch device (touch points detection)', function test( t ) {
	var isTouchDevice;
	var win;

	win = {
		'navigator': {
			'maxTouchPoints': 3,
			'msMaxTouchPoints': 3
		}
	};

	isTouchDevice = proxyquire( './../lib/browser.js', {
		'@stdlib/utils/global': getGlobal,
		'./../../is-browser': true
	});

	t.equal( isTouchDevice(), true, 'returns true' );
	t.end();

	function getGlobal() {
		return win;
	}
});

tape( 'the function returns `false` if the current environment is not a touch device (touch points detection)', function test( t ) {
	var isTouchDevice;
	var win;

	win = {
		'navigator': {
			'maxTouchPoints': 0,
			'msMaxTouchPoints': 0
		}
	};

	isTouchDevice = proxyquire( './../lib/browser.js', {
		'@stdlib/utils/global': getGlobal,
		'./../../is-browser': true
	});

	t.equal( isTouchDevice(), false, 'returns false' );
	t.end();

	function getGlobal() {
		return win;
	}
});

tape( 'the function returns `false` if the current environment is not a browser', function test( t ) {
	var isTouchDevice = proxyquire( './../lib/browser.js', {
		'./../../is-browser': false
	});

	t.equal( isTouchDevice(), false, 'returns false' );
	t.end();
});
