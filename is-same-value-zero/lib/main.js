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

var isSameComplexValueZero = require( '@stdlib/complex/float64/base/assert/is-same-value-zero' );
var isComplexLike = require( './../../is-complex-like' );


// MAIN //

/**
* Tests if two arguments are the same value.
*
* ## Notes
*
* -   The function implements the SameValueZero Algorithm used by `TypedArray` and `ArrayBuffer` constructors, `Map` and `Set` operations, `String.prototype.includes`, and `Array.prototype.includes` since ES2016, and includes support for complex number objects.
* -   In contrast to the strict equality operator `===`, `NaNs` are considered the same value.
*
* @param {*} a - first input value
* @param {*} b - second input value
* @returns {boolean} boolean indicating whether two arguments are the same value
*
* @example
* var bool = isSameValueZero( true, true );
* // returns true
*
* @example
* var bool = isSameValueZero( 3.14, 3.14 );
* // returns true
*
* @example
* var bool = isSameValueZero( {}, {} );
* // returns false
*
* @example
* var bool = isSameValueZero( -0.0, -0.0 );
* // returns true
*
* @example
* var bool = isSameValueZero( -0.0, 0.0 );
* // returns true
*
* @example
* var bool = isSameValueZero( NaN, NaN );
* // returns true
*
* @example
* var bool = isSameValueZero( [], [] );
* // returns false
*/
function isSameValueZero( a, b ) {
	if ( ( a === b ) || ( a !== a && b !== b ) ) { // handles NaNs
		return true;
	}
	if ( isComplexLike( a ) && isComplexLike( b ) ) {
		return isSameComplexValueZero( a, b );
	}
	return false;
}


// EXPORTS //

module.exports = isSameValueZero;
