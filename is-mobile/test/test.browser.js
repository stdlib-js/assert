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
var isMobile = require( './../lib/browser.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isMobile, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if the current environment is a mobile device', function test( t ) {
	var isMobile;
	var win;

	win = {
		'navigator': {
			'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
		}
	};

	isMobile = proxyquire( './../lib/browser.js', {
		'@stdlib/utils/global': getGlobal,
		'./../../is-browser': true
	});

	t.equal( isMobile(), true, 'returns true' );
	t.end();

	function getGlobal() {
		return win;
	}
});

tape( 'the function returns `false` if the current environment is not a mobile device', function test( t ) {
	var isMobile;
	var win;

	win = {
		'navigator': {
			'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36'
		}
	};

	isMobile = proxyquire( './../lib/browser.js', {
		'@stdlib/utils/global': getGlobal,
		'./../../is-browser': true
	});

	t.equal( isMobile(), false, 'returns false' );
	t.end();

	function getGlobal() {
		return win;
	}
});

tape( 'the function returns `false` if the current environment is not a browser', function test( t ) {
	var isMobile = proxyquire( './../lib/browser.js', {
		'./../../is-browser': false
	});

	t.equal( isMobile(), false, 'returns false' );
	t.end();
});
