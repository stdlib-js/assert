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

var isCollection = require( './../../is-collection' );
var isInteger = require( './../../is-integer' ).isPrimitive;
var isString = require( './../../is-string' ).isPrimitive;
var indexOfSameValue = require( '@stdlib/array/base/index-of-same-value' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Tests if an array-like value contains a search value.
*
* @param {(Collection|string)} value - input value
* @param {*} searchValue - search value
* @param {integer} [position=0] - position at which to start searching for `searchValue`
* @throws {TypeError} first argument must be array-like
* @throws {Error} must provide a search value
* @throws {TypeError} second argument must be a string when the first argument is a string
* @throws {TypeError} third argument must be an integer
* @returns {boolean} boolean indicating whether one value contains another
*
* @example
* var bool = contains( 'last man standing', 'stand' );
* // returns true
*
* @example
* var bool = contains( [ 1, 2, 3, 4 ], 2 );
* // returns true
*
* @example
* var bool = contains( 'presidential election', 'president' );
* // returns true
*
* @example
* var bool = contains( [ NaN, 2, 3, 4 ], NaN );
* // returns true
*
* @example
* var bool = contains( 'javaScript', 'js' );
* // returns false
*
* @example
* var bool = contains( [ 1, 2, 3, {} ], {} );
* // returns false
*
* @example
* var bool = contains( 'Hidden Treasures', '' );
* // returns true
*/
function contains( value, searchValue, position ) {
	var isStr;
	var pos;

	isStr = isString( value );
	if ( !isCollection( value ) && !isStr ) {
		throw new TypeError( format( 'invalid argument. First argument must be array-like. Value: `%s`.', value ) );
	}
	if ( arguments.length < 2 ) {
		throw new Error( 'insufficient arguments. Must provide a search value.' );
	}
	if ( arguments.length > 2 ) {
		if ( !isInteger( position ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be an integer. Value: `%s`.', position ) );
		}
		pos = position;
		if ( pos < 0 ) {
			pos = 0;
		}
	} else {
		pos = 0;
	}
	if ( isStr ) {
		if ( !isString( searchValue ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a string. Value: `%s`.', searchValue ) );
		}
		return value.indexOf( searchValue, pos ) !== -1;
	}
	return indexOfSameValue( value, searchValue, pos ) !== -1;
}


// EXPORTS //

module.exports = contains;
