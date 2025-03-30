/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var isMatrixLike = require( './../../is-matrix-like' );


// MAIN //

/**
* Tests if a value is a 2-dimensional ndarray-like object whose underlying data type is `complex64`.
*
* @param {*} v - value to test
* @returns {boolean} boolean indicating if a value is a 2-dimensional ndarray-like object whose underlying data type is `complex64`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var buffer = new Complex64Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
* var arr = ndarray( 'complex64', buffer, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
*
* var bool = isComplex64MatrixLike( arr );
* // returns true
*
* bool = isComplex64MatrixLike( [] );
* // returns false
*/
function isComplex64MatrixLike( v ) {
	return ( isMatrixLike( v ) && v.dtype === 'complex64' );
}


// EXPORTS //

module.exports = isComplex64MatrixLike;
