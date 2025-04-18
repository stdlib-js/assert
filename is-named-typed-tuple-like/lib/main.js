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

var isTypedArray = require( './../../is-typed-array' );
var hasOwnProp = require( './../../has-own-property' );


// MAIN //

/**
* Tests if a value is named typed tuple-like.
*
* @param {*} v - value to test
* @returns {boolean} boolean indicating if a value is named typed tuple-like
*
* @example
* var namedtypedtuple = require( '@stdlib/dstructs/named-typed-tuple' );
*
* var Point = namedtypedtuple( [ 'x', 'y' ] );
*
* var p = new Point();
*
* var bool = isNamedTypedTupleLike( p );
* // returns true
*
* bool = isNamedTypedTupleLike( [] );
* // returns false
*/
function isNamedTypedTupleLike( v ) {
	return (
		isTypedArray( v ) &&
		typeof v.fieldOf === 'function' &&
		typeof v.findField === 'function' &&
		typeof v.ind2key === 'function' &&
		typeof v.key2ind === 'function' &&
		typeof v.lastFieldOf === 'function' &&
		typeof v.subtuple === 'function' &&
		hasOwnProp( v, 'fields' ) &&
		hasOwnProp( v, 'orderedFields' )
	);
}


// EXPORTS //

module.exports = isNamedTypedTupleLike;
