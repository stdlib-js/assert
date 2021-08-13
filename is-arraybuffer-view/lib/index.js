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

/**
* Test if a value is an `ArrayBuffer` view.
*
* @module @stdlib/assert/is-arraybuffer-view
*
* @example
* var isArrayBufferView = require( '@stdlib/assert/is-arraybuffer-view' );
* var Int32Array = require( '@stdlib/array/int32' );
*
* var bool = isArrayBufferView( new Int32Array( 10 ) );
* // returns true
*
* bool = isArrayBufferView( {} );
* // returns false
*/

// MODULES //

var hasArrayBufferSupport = require( './../../has-arraybuffer-support' );
var main = require( './main.js' );
var polyfill = require( './polyfill.js' );


// MAIN //

var isArrayBufferView;
if ( hasArrayBufferSupport() ) {
	isArrayBufferView = main;
} else {
	isArrayBufferView = polyfill;
}


// EXPORTS //

module.exports = isArrayBufferView;
