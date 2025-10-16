/*
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

// TypeScript Version: 4.1

/**
* Tests if two arguments are both generic arrays and contain respective elements which are approximately equal within a specified number of ULPs (units in the last place).
*
* ## Notes
*
* -   The function returns `false` if either input value is a generic array containing `NaN`.
* -   The function does not distinguish between `-0` and `+0`, treating them as equal.
*
* @param v1 - first input value
* @param v2 - second input value
* @param maxULP - maximum allowed ULP difference
* @returns boolean indicating whether two arguments are approximately equal
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
* var y = [ 1.0, 2.0, 3.0 ];
*
* var out = isAlmostEqualArray( x, y, 0 );
* // returns true
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
* var y = [ 1.0, 2.0, 4.0 ];
*
* var out = isAlmostEqualArray( x, y, 1 );
* // returns false
*/
declare function isAlmostEqualArray( v1: any, v2: any, maxULP: number ): boolean;


// EXPORTS //

export = isAlmostEqualArray;
