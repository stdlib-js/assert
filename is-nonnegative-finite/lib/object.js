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

var isNonNegativeNumber = require( './../../is-nonnegative-number' ).isObject;
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Tests if a value is a finite number object having a nonnegative value.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a number object having a nonnegative finite number value
*
* @example
* var bool = isNonNegativeFinite( 3.0 );
* // returns false
*
* @example
* var bool = isNonNegativeFinite( new Number( 3.0 ) );
* // returns true
*
* @example
* var bool = isNonNegativeFinite( new Number( -5.0 ) );
* // returns false
*
* @example
* var bool = isNonNegativeFinite( 1.0/0.0 );
* // returns false
*/
function isNonNegativeFinite( value ) {
	return (
		isNonNegativeNumber( value ) &&
		value.valueOf() < PINF
	);
}


// EXPORTS //

module.exports = isNonNegativeFinite;
