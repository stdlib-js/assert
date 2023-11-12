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

var isndarrayLike = require( './../../is-ndarray-like' );


// MAIN //

/**
* Tests if a value is a 2-dimensional ndarray-like object.
*
* @param {*} v - value to test
* @returns {boolean} boolean indicating if a value is a 2-dimensional ndarray-like object
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var arr = ndarray( 'generic', [ 0, 0, 0, 0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
*
* var bool = isMatrixLike( arr );
* // returns true
*
* bool = isMatrixLike( [] );
* // returns false
*/
function isMatrixLike( v ) {
	return (
		isndarrayLike( v ) &&
		v.ndims === 2 &&
		v.shape.length === 2 &&
		v.strides.length === 2
	);
}


// EXPORTS //

module.exports = isMatrixLike;
