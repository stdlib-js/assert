/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var isString = require( './../../is-string' ).isPrimitive;


// VARIABLES //

var RE = /^[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/;


// MAIN //

/**
* Tests if a value is a blank string (i.e., an empty string or a string consisting only of whitespace characters).
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if an input value is a blank string
*
* @example
* var bool = isBlankString( '   ' );
* // returns true
*
* @example
* var bool = isBlankString( '' );
* // returns true
*
* @example
* var bool = isBlankString( '\t\t\t' );
* // returns true
*
* @example
* var bool = isBlankString( '\r\n\r\n' );
* // returns true
*
* @example
* var bool = isBlankString( 'beep' );
* // returns false
*/
function isBlankString( value ) {
	if ( !isString( value ) ) {
		return false;
	}
	return RE.test( value );
}


// EXPORTS //

module.exports = isBlankString;
