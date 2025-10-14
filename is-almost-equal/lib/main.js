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

var isAlmostEqualComplex64 = require( '@stdlib/complex/float32/base/assert/is-almost-equal' );
var isAlmostEqualComplex128 = require( '@stdlib/complex/float64/base/assert/is-almost-equal' );
var isNumber = require( './../../is-number' ).isPrimitive;
var isAlmostEqualF64 = require( '@stdlib/number/float64/base/assert/is-almost-equal' );
var isComplexLike = require( './../../is-complex-like' );


// MAIN //

/**
* Tests if two arguments are approximately equal within a specified number of ULPs (units in the last place).
*
* ## Notes
*
* -   The function returns `false` if either input value is `NaN` or, in the case of complex numbers, if either the real or imaginary component is `NaN`.
* -   The function does not distinguish between `-0` and `+0`, treating them as equal.
*
* @param {*} a - first input value
* @param {*} b - second input value
* @param {NonNegativeInteger} maxULP - maximum allowed ULP difference
* @returns {boolean} boolean indicating whether two arguments are approximately equal within a specified number of ULPs
*
* @example
* var EPS = require( '@stdlib/constants/float64/eps' );
*
* var bool = isAlmostEqual( 1.0, 1.0+EPS, 0 );
* // returns false
*
* bool = isAlmostEqual( 1.0, 1.0+EPS, 1 );
* // returns true
*
* bool = isAlmostEqual( {}, {}, 0 );
* // returns false
*
* bool = isAlmostEqual( -0.0, 0.0, 0 );
* // returns true
*
* bool = isAlmostEqual( NaN, NaN, 0 );
* // returns false
*
* bool = isAlmostEqual( [], [], 1 );
* // returns false
*/
function isAlmostEqual( a, b, maxULP ) {
	if ( a === b ) {
		return true;
	}
	if ( isNumber( a ) && isNumber( b ) ) {
		return isAlmostEqualF64( a, b, maxULP );
	}
	if ( isComplexLike( a ) && isComplexLike( b ) ) {
		if ( a.BYTES_PER_ELEMENT === 4 && b.BYTES_PER_ELEMENT === 4 ) {
			return isAlmostEqualComplex64( a, b, maxULP );
		}
		return isAlmostEqualComplex128( a, b, maxULP );
	}
	return false;
}


// EXPORTS //

module.exports = isAlmostEqual;
