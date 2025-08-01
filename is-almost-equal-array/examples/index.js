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

var isAlmostEqualArray = require( './../lib' );

var x = [ 1.0, 2.0, 3.0 ];
var y = [ 1.0, 2.0, 3.0 ];
var out = isAlmostEqualArray( x, y, 0 );
console.log( out );
// => true

x = [ -0.0, 0.0, -0.0 ];
y = [ 0.0, -0.0, 0.0 ];
out = isAlmostEqualArray( x, y, 1 );
console.log( out );
// => true

x = [ NaN, NaN, NaN ];
y = [ NaN, NaN, NaN ];
out = isAlmostEqualArray( x, y, 0 );
console.log( out );
// => false
