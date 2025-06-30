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

var isInt32Array = require( './../../is-int32array' );
var hasEqualValues = require( '@stdlib/array/base/assert/has-equal-values' );


// MAIN //

/**
* Tests if two arguments are both Int32Arrays and have equal values.
*
* @param {*} v1 - first value
* @param {*} v2 - second value
* @returns {boolean} boolean result
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3 ] );
* var y = new Int32Array( [ 1, 2, 3 ] );
*
* var out = isEqualInt32Array( x, y );
* // returns true
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3 ] );
* var y = new Int32Array( [ 1, 2, 4 ] );
*
* var out = isEqualInt32Array( x, y );
* // returns false
*/
function isEqualInt32Array( v1, v2 ) {
	return ( isInt32Array( v1 ) && isInt32Array( v2 ) && hasEqualValues( v1, v2 ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = isEqualInt32Array;
