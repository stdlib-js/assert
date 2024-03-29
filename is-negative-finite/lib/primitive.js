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

var isNumber = require( './../../is-number' ).isPrimitive;
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Tests if a value is a number primitive having a finite negative value.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a number primitive having a finite negative value
*
* @example
* var bool = isNegativeFinite( -3.0 );
* // returns true
*
* @example
* var bool = isNegativeFinite( -1.0/0.0 );
* // returns false
*
* @example
* var bool = isNegativeFinite( new Number( -3.0 ) );
* // returns false
*
* @example
* var bool = isNegativeFinite( new Number( -1.0/0.0 ) );
* // returns false
*/
function isNegativeFinite( value ) {
	return (
		isNumber( value ) &&
		value < 0.0 &&
		value > NINF
	);
}


// EXPORTS //

module.exports = isNegativeFinite;
