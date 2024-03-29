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

var isArrayLikeObject = require( './../../is-array-like-object' );


// MAIN //

/**
* Tests if a value is a ragged nested array.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a ragged nested array
*
* @example
* var bool = isRaggedNestedArray( [ [ 1, 2, 3 ], [ 4, 5 ] ] );
* // returns true
*
* @example
* var bool = isRaggedNestedArray( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
* // returns false
*
* @example
* var bool = isRaggedNestedArray( 'beep' );
* // returns false
*/
function isRaggedNestedArray( value ) {
	var len;
	var i;
	if ( !isArrayLikeObject( value ) || value.length < 2 ) {
		return false;
	}
	len = value[ 0 ].length;
	for ( i = 1; i < value.length; i++ ) {
		if ( !isArrayLikeObject( value[ i ] ) ) {
			return false;
		}
		if ( value[ i ].length !== len ) {
			return true;
		}
	}
	return false;
}


// EXPORTS //

module.exports = isRaggedNestedArray;
