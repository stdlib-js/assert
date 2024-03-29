/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var Number = require( '@stdlib/number/ctor' );
var isNegativeFinite = require( './../lib' );

console.log( isNegativeFinite( -5.0 ) );
// => true

console.log( isNegativeFinite( new Number( -5.0 ) ) );
// => true

console.log( isNegativeFinite( -3.14 ) );
// => true

console.log( isNegativeFinite( 0.0 ) );
// => false

console.log( isNegativeFinite( 5.0 ) );
// => false

console.log( isNegativeFinite( '-5' ) );
// => false

console.log( isNegativeFinite( null ) );
// => false

console.log( isNegativeFinite( -1.0/0.0 ) );
// => false

console.log( isNegativeFinite( new Number( -1.0/0.0 ) ) );
// => false
