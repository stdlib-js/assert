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

var Float32Array = require( '@stdlib/array/float32' );
var isAlmostEqualFloat32Array = require( './../lib' );

var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );
var out = isAlmostEqualFloat32Array( x, y, 0 );
console.log( out );
// => true

x = new Float32Array( [ -0.0, 0.0, -0.0 ] );
y = new Float32Array( [ 0.0, -0.0, 0.0 ] );
out = isAlmostEqualFloat32Array( x, y, 1 );
console.log( out );
// => true

x = new Float32Array( [ NaN, NaN, NaN ] );
y = new Float32Array( [ NaN, NaN, NaN ] );
out = isAlmostEqualFloat32Array( x, y, 0 );
console.log( out );
// => false
