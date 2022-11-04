/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 2.0

/**
* Tests if two arguments are strictly equal.
*
* ## Notes
*
* -   The function differs from the `===` operator in that the function treats `-0` and `+0` as distinct.
*
* @param a - first input value
* @param b - second input value
* @returns boolean indicating whether two arguments are strictly equal
*
* @example
* var bool = isStrictEqual( true, true );
* // returns true
*
* @example
* var bool = isStrictEqual( 3.14, 3.14 );
* // returns true
*
* @example
* var bool = isStrictEqual( {}, {} );
* // returns false
*
* @example
* var bool = isStrictEqual( -0.0, -0.0 );
* // returns true
*
* @example
* var bool = isStrictEqual( -0.0, 0.0 );
* // returns false
*
* @example
* var bool = isStrictEqual( NaN, NaN );
* // returns false
*
* @example
* var bool = isStrictEqual( [], [] );
* // returns false
*/
declare function isStrictEqual( a: any, b: any ): boolean;


// EXPORTS //

export = isStrictEqual;
