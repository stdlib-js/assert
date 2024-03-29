/*
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

// TypeScript Version: 4.1

/**
* Tests if a value is an ndarray-like object whose underlying data type is `complex64`.
*
* @param v - value to test
* @returns boolean indicating if a value is an ndarray-like object whose underlying data type is `complex64`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var arr = ndarray( 'complex64', new Complex64Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
*
* var bool = isComplex64ndarrayLike( arr );
* // returns true
*
* bool = isComplex64ndarrayLike( [] );
* // returns false
*/
declare function isComplex64ndarrayLike( v: any ): boolean;


// EXPORTS //

export = isComplex64ndarrayLike;
