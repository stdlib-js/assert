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

var getPrototypeOf = require( '@stdlib/utils/get-prototype-of' );
var typeOf = require( '@stdlib/utils/type-of' );
var isError = require( './../../is-error' );


// MAIN //

/**
* Tests if a value is an `EvalError` object.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether a value is an `EvalError` object
*
* @example
* var bool = isEvalError( new EvalError( 'beep' ) );
* // returns true
*
* @example
* var bool = isEvalError( {} );
* // returns false
*/
function isEvalError( value ) {
	if ( typeof value !== 'object' || value === null ) {
		return false;
	}
	// Check for `EvalError` objects from the same realm (same Node.js `vm` or same `Window` object)...
	if ( value instanceof EvalError ) {
		return true;
	}
	// All `EvalError` objects are `Error` objects...
	if ( isError( value ) ) {
		// Walk the prototype tree until we find the desired constructor...
		while ( value ) {
			if ( typeOf( value ) === 'evalerror' ) {
				return true;
			}
			value = getPrototypeOf( value );
		}
	}
	return false;
}


// EXPORTS //

module.exports = isEvalError;
