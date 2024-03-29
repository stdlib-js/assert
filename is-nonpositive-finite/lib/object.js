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

var NINF = require( '@stdlib/constants/float64/ninf' );
var isNumber = require( './../../is-number' ).isObject;


// MAIN //

/**
* Tests if a value is a number object having a non positive finite value.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is non positive finite
*
* @example
* var bool = isNonPositiveFinite( -3.0 );
* // returns false
*
* @example
* var bool = isNonPositiveFinite( new Number( -3.0 ) );
* // returns true
*/
function isNonPositiveFinite( value ) {
	return (
		isNumber( value ) && value.valueOf() <=0 && value.valueOf() !== NINF);
}


// EXPORTS //

module.exports = isNonPositiveFinite;
