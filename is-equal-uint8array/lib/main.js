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

var isUint8Array = require( './../../is-uint8array' );
var hasEqualValues = require( '@stdlib/array/base/assert/has-equal-values' );


// MAIN //

/**
* Tests if two arguments are both Uint8Arrays and have equal values.
*
* @param {*} v1 - first value
* @param {*} v2 - second value
* @returns {boolean} boolean result
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Uint8Array( [ 1, 2, 3 ] );
* var y = new Uint8Array( [ 1, 2, 3 ] );
*
* var out = isEqualUint8Array( x, y );
* // returns true
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Uint8Array( [ 1, 2, 3 ] );
* var y = new Uint8Array( [ 1, 2, 4 ] );
*
* var out = isEqualUint8Array( x, y );
* // returns false
*/
function isEqualUint8Array( v1, v2 ) {
	return ( isUint8Array( v1 ) && isUint8Array( v2 ) && hasEqualValues( v1, v2 ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = isEqualUint8Array;
