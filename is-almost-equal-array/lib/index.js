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

/**
* Test if two arguments are both generic arrays and contain respective elements which are approximately equal within a specified number of ULPs (units in the last place).
*
* @module @stdlib/assert/is-almost-equal-array
*
* @example
* var isAlmostEqualArray = require( '@stdlib/assert/is-almost-equal-array' );
*
* var x = [ 1.0, 2.0, 3.0 ];
* var y = [ 1.0, 2.0, 3.0 ];
*
* var out = isAlmostEqualArray( x, y, 0 );
* // returns true
*
* @example
* var isAlmostEqualArray = require( '@stdlib/assert/is-almost-equal-array' );
*
* var x = [ 1.0, 2.0, 3.0 ];
* var y = [ 1.0, 2.0, 4.0 ];
*
* var out = isAlmostEqualArray( x, y, 1 );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
