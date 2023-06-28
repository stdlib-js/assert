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

var isString = require( './../../is-string' ).isPrimitive;


// MAIN //

/**
* Tests if a value is a binary string.
*
* @param {*} str - value to test
* @returns {boolean} boolean indicating if an input value is a binary string
*
* @example
* var bool = isBinaryString( '1000101' );
* // returns true
*
* @example
* var bool = isBinaryString( 'beep' );
* // returns false
*
* @example
* var bool = isBinaryString( '' );
* // returns false
*/
function isBinaryString( str ) {
	var ch;
	var i;
	if ( !isString( str ) ) {
		return false;
	}
	if ( str.length === 0 ) {
		return false;
	}
	for ( i = 0; i < str.length; i++ ) {
		ch = str[ i ];
		if ( ch !== '1' && ch !== '0' ) {
			return false;
		}
	}
	return true;
}


// EXPORTS //

module.exports = isBinaryString;
