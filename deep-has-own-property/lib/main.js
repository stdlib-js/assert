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
var isArray = require( './../../is-array' );
var format = require( '@stdlib/string/format' );
var validate = require( './validate.js' );
var defaults = require( './defaults.js' );
var has = require( './has.js' );


// MAIN //

/**
* Tests whether an object contains a nested key path.
*
* @param {*} value - value to test
* @param {(string|Array)} path - key path
* @param {Options} [options] - function options
* @param {string} [options.sep='.'] - key path separator
* @throws {TypeError} second argument must be a string or key array
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {boolean} boolean indicating whether an object has a nested property
*
* @example
* var obj = { 'a': { 'b': { 'c': 'd' } } };
* var bool = deepHasOwnProp( obj, 'a.b.c' );
* // returns true
*
* @example
* var arr = [
*     {
*         'a': [
*             {
*                 'b': [
*                     { 'c': 'd' },
*                     { 'e': 'f' }
*                 ]
*             }
*         ]
*     }
* ];
* var bool = deepHasOwnProp( arr, '0.a.0.b.0.c' );
* // returns true
*
* @example
* var obj = { 'a': { 'b': { 'c': 'd' } } };
* var bool = deepHasOwnProp( obj, [ 'a', 'b', 'c' ] );
* // returns true
*
* @example
* var obj = { 'a': { 'b': { 'c': 'd' } } };
* var bool = deepHasOwnProp( obj, 'a/b/c', {
*     'sep': '/'
* });
* // returns true
*/
function deepHasOwnProp( value, path, options ) {
	var isStr;
	var props;
	var opts;
	var err;

	isStr = isString( path );
	if ( !isStr && !isArray( path ) ) {
		throw new TypeError( format( 'invalid argument. Key path must be a string or a key array. Value: `%s`.', path ) );
	}
	opts = defaults();
	if ( arguments.length > 2 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( value === void 0 || value === null ) {
		return false;
	}
	if ( isStr ) {
		props = path.split( opts.sep );
	} else {
		props = path;
	}
	return has( value, props );
}


// EXPORTS //

module.exports = deepHasOwnProp;
