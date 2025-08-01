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

var Complex64Array = require( '@stdlib/array/complex64' );
var isAlmostEqualComplex64Array = require( './../lib' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var y = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var out = isAlmostEqualComplex64Array( x, y, 0 );
console.log( out );
// => true

x = new Complex64Array( [ -0.0, 0.0, -0.0, 0.0 ] );
y = new Complex64Array( [ 0.0, -0.0, 0.0, -0.0 ] );
out = isAlmostEqualComplex64Array( x, y, 1 );
console.log( out );
// => true

x = new Complex64Array( [ NaN, NaN, NaN, NaN ] );
y = new Complex64Array( [ NaN, NaN, NaN, NaN ] );
out = isAlmostEqualComplex64Array( x, y, 0 );
console.log( out );
// => false
