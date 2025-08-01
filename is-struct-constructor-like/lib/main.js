/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var isPositiveInteger = require( './../../is-positive-integer' ).isPrimitive;
var isFunction = require( './../../is-function' );
var hasOwnProp = require( './../../has-own-property' );


// MAIN //

/**
* Tests if a value is struct constructor-like.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is struct constructor-like
*
* @example
* var structFactory = require( '@stdlib/dstructs/struct' );
*
* var schema = [
*     {
*         'name': 'foo',
*         'type': 'float64'
*     }
* ];
* var Struct = structFactory( schema );
*
* var bool = isStructConstructorLike( Struct );
* // returns true
*
* bool = isStructConstructorLike( [] );
* // returns false
*/
function isStructConstructorLike( value ) {
	return (
		isFunction( value ) &&
		isPositiveInteger( value.alignment ) &&
		isPositiveInteger( value.byteLength ) &&
		isFunction( value.byteLengthOf ) &&
		isFunction( value.byteOffsetOf ) &&
		isFunction( value.bufferOf ) &&
		isFunction( value.isStruct ) &&
		isFunction( value.viewOf ) &&
		hasOwnProp( value, 'fields' ) &&
		hasOwnProp( value, 'layout' )
	);
}


// EXPORTS //

module.exports = isStructConstructorLike;
