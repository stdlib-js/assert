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

/* eslint-disable object-curly-newline */

'use strict';

var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var isCollection = require( './../lib' );

console.log( isCollection( [] ) );
// => true

console.log( isCollection( new Float64Array( 10 ) ) );
// => true

console.log( isCollection( new Float32Array( 10 ) ) );
// => true

console.log( isCollection( new Int32Array( 10 ) ) );
// => true

console.log( isCollection( new Uint32Array( 10 ) ) );
// => true

console.log( isCollection( new Int16Array( 10 ) ) );
// => true

console.log( isCollection( new Uint16Array( 10 ) ) );
// => true

console.log( isCollection( new Int8Array( 10 ) ) );
// => true

console.log( isCollection( new Uint8Array( 10 ) ) );
// => true

console.log( isCollection( new Uint8ClampedArray( 10 ) ) );
// => true

console.log( isCollection( { 'length': 0 } ) );
// => true

console.log( isCollection( {} ) );
// => false

console.log( isCollection( 'beep' ) );
// => false

console.log( isCollection( isCollection ) );
// => false

console.log( isCollection( null ) );
// => false

console.log( isCollection( void 0 ) );
// => false

console.log( isCollection( 3.14 ) );
// => false
