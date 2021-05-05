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

var lowercase = require( '@stdlib/string/lowercase' );
var uppercase = require( '@stdlib/string/uppercase' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;


// MAIN //

/**
* Tests if a value is a lowercase string.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a lowercase string
*
* @example
* var bool = isLowercase( 'salt and light' );
* // returns true
*
* @example
* var bool = isLowercase( 'HELLO' );
* // returns false
*
* @example
* var bool = isLowercase( 'World' );
* // returns false
*
* @example
* var bool = isLowercase( '!' );
* // returns false
*/
function isLowercase( value ) {
	return (
		isString( value ) &&
		value === lowercase( value ) &&
		value !== uppercase( value )
	);
}


// EXPORTS //

module.exports = isLowercase;
