/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var isFloat16Array = require( './../../is-float16array' );
var PINF = require( '@stdlib/constants/float64/pinf' ); // TODO: replace with `constants/float16/pinf`
var GlobalFloat16Array = require( './float16array.js' );


// MAIN //

/**
* Tests for native `Float16Array` support.
*
* @returns {boolean} boolean indicating if an environment has `Float16Array` support
*
* @example
* var bool = hasFloat16ArraySupport();
* // returns <boolean>
*/
function hasFloat16ArraySupport() {
	var bool;
	var arr;

	if ( typeof GlobalFloat16Array !== 'function' ) {
		return false;
	}
	// Test basic support...
	try {
		arr = new GlobalFloat16Array( [ 1.0, 3.14, -3.14, 5.0e40 ] );
		bool = (
			isFloat16Array( arr ) &&
			arr[ 0 ] === 1.0 &&
			arr[ 1 ] !== 3.14 &&
			arr[ 2 ] !== -3.14 &&
			arr[ 3 ] === PINF
		);
	} catch ( err ) { // eslint-disable-line no-unused-vars
		bool = false;
	}
	return bool;
}


// EXPORTS //

module.exports = hasFloat16ArraySupport;
