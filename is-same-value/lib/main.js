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

var isSameComplexValue = require( '@stdlib/complex/float64/base/assert/is-same-value' );
var isComplexLike = require( './../../is-complex-like' );


// MAIN //

/**
* Tests if two arguments are the same value.
*
* ## Notes
*
* -   The function implements the [SameValue Algorithm][ecma-262-same-value-algorithm] (as specified in ECMAScript 5), with support for complex number objects.
* -   In contrast to the strict equality operator `===`, `-0` and `+0` are distinguishable and `NaNs` are the same.
*
* [ecma-262-same-value-algorithm]: http://ecma-international.org/ecma-262/5.1/#sec-9.12
*
* @param {*} a - first input value
* @param {*} b - second input value
* @returns {boolean} boolean indicating whether two arguments are the same value
*
* @example
* var bool = isSameValue( true, true );
* // returns true
*
* @example
* var bool = isSameValue( 3.14, 3.14 );
* // returns true
*
* @example
* var bool = isSameValue( {}, {} );
* // returns false
*
* @example
* var bool = isSameValue( -0.0, -0.0 );
* // returns true
*
* @example
* var bool = isSameValue( -0.0, 0.0 );
* // returns false
*
* @example
* var bool = isSameValue( NaN, NaN );
* // returns true
*
* @example
* var bool = isSameValue( [], [] );
* // returns false
*/
function isSameValue( a, b ) {
	if ( a === b ) {
		if ( a === 0.0 ) {
			return 1.0 / a === 1.0 / b; // handles +-0
		}
		return true;
	}
	if ( a !== a && b !== b ) { // handles NaNs
		return true;
	}
	if ( isComplexLike( a ) && isComplexLike( b ) ) {
		return isSameComplexValue( a, b );
	}
	return false;
}


// EXPORTS //

module.exports = isSameValue;
