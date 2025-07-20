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

var isComplex64Array = require( './../../is-complex64array' );
var hasAlmostEqualValues = require( '@stdlib/array/base/assert/has-almost-equal-values' );


// MAIN //

/**
* Tests if two arguments are both Complex64Arrays and contain respective elements which are approximately equal within a specified number of ULPs (units in the last place).
*
* ## Notes
*
* -   The function returns `false` if either input value is a `Complex64Array` containing `NaN`.
* -   The function does not distinguish between `-0` and `+0`, treating them as equal.
*
* @param {*} v1 - first value
* @param {*} v2 - second value
* @param {NonNegativeInteger} maxULP - maximum allowed ULP difference
* @returns {boolean} boolean indicating whether two arguments are approximately equal
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var out = isAlmostEqualComplex64Array( x, y, 0 );
* // returns true
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Complex64Array( [ 1.0, 2.0, 4.0, 4.0 ] );
*
* var out = isAlmostEqualComplex64Array( x, y, 1 );
* // returns false
*/
function isAlmostEqualComplex64Array( v1, v2, maxULP ) {
	return ( isComplex64Array( v1 ) && isComplex64Array( v2 ) && hasAlmostEqualValues( v1, v2, maxULP ) );  // eslint-disable-line max-len
}


// EXPORTS //

module.exports = isAlmostEqualComplex64Array;
