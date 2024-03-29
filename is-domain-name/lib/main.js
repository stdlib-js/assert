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

/**
* Regular expression: `/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/`
*
* -   `\^`
*     -   match any string which begins with
*
* -   `(?:)`
*     -   capture but do not remember
*
* -   `[a-z0-9]`
*     -   match a single digit or letter
*
* -   `(?:)`
*     -   capture but do not remember
*
* -   `[a-z0-9-]{0,61}`
*     -   match between 0 and 61 digits, letters, or hyphens
*
* -   `[a-z0-9]`
*     -   match a single digit or letter
*
* -   `?`
*     -   match the previous token between zero and one times
*
* -   `\.`
*     -   match a literal `.`
*
* -   `+`
*     -   match the previous group one or more times
*
* -   `[a-z0-9]`
*     -   match a single digit or letter
*
* -   `[a-z0-9-]{0,61}`
*     -   match between 0 and 61 digits, letters, or hyphens
*
* -   `[a-z0-9]`
*     -   match a single digit or letter
*
* -   `$`
*     -   match end of string
*
* @private
* @constant
* @type {RegExp}
*/
var RE_DOMAIN_NAME = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i;


// MAIN //

/**
* Tests if a value is a domain name.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether a value is a domain name
*
* @example
* var bool = isDomainName( 'beep.boop' );
* // returns true
*
* @example
* var bool = isDomainName( 'beep boop' );
* // returns false
*
* @example
* var bool = isDomainName( 'foo@bar.com' );
* // returns false
*
* @example
* var bool = isDomainName( null );
* // returns false
*/
function isDomainName( value ) {
	if ( !isString( value ) ) {
		return false;
	}
	if ( value.length < 2 || value.length > 255 ) {
		return false;
	}
	return RE_DOMAIN_NAME.test( value );
}


// EXPORTS //

module.exports = isDomainName;
