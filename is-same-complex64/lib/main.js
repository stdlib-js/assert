/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var isComplex64 = require( './../../is-complex64' );
var isSameValuef = require( '@stdlib/complex/float32/base/assert/is-same-value' );


// MAIN //

/**
* Tests if two arguments are both single-precision complex floating-point numbers and have the same value.
*
* @param {*} v1 - first value
* @param {*} v2 - second value
* @returns {boolean} boolean result
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64( 1.0, 2.0 );
* var y = new Complex64( 1.0, 2.0 );
*
* var out = isSameComplex64( x, y );
* // returns true
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64( 1.0, 2.0 );
* var y = new Complex64( -1.0, -2.0 );
*
* var out = isSameComplex64( x, y );
* // returns false
*/
function isSameComplex64( v1, v2 ) {
	if ( isComplex64( v1 ) && isComplex64( v2 ) ) {
		return isSameValuef( v1, v2 );
	}
	return false;
}


// EXPORTS //

module.exports = isSameComplex64;
