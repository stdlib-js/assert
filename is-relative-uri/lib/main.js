/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var isAbsoluteURI = require( './../../is-absolute-uri' );


// VARIABLES //

// Illegal characters (anything which is not in between the square brackets):
var RE_ILLEGALS = /[^a-z0-9:\/?#\[\]@!$&'()*+,;=.\-_~%]/i; // eslint-disable-line no-useless-escape

// Incomplete HEX escapes:
var RE_HEX1 = /%[^0-9a-f]/i;
var RE_HEX2 = /%[0-9a-f](:?[^0-9a-f]|$)/i;


// MAIN //

/**
* Tests whether a value is a relative URI.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether a value is a relative URI
*
* @example
* var bool = isRelativeURI( './beep/boop' );
* // returns true
*
* @example
* var bool = isRelativeURI( '/dashboard/admin' );
* // returns true
*
* @example
* var bool = isRelativeURI( 'https://wikipedia.org' );
* // returns false
*
* @example
* var bool = isRelativeURI( null );
* // returns false
*/
function isRelativeURI( value ) {
	if ( !isString( value ) ) {
		return false;
	}
	// Check for illegal characters:
	if ( RE_ILLEGALS.test( value ) ) {
		return false;
	}
	// Check for incomplete HEX escapes:
	if (
		RE_HEX1.test( value ) ||
		RE_HEX2.test( value )
	) {
		return false;
	}
	// Check for absolute URI:
	return !isAbsoluteURI( value );
}


// EXPORTS //

module.exports = isRelativeURI;
