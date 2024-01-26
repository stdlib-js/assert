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

/* eslint-disable no-empty-function, no-restricted-syntax */

'use strict';

var isFalsy = require( './../lib' );

console.log( isFalsy( false ) );
// => true

console.log( isFalsy( 0 ) );
// => true

console.log( isFalsy( NaN ) );
// => true

console.log( isFalsy( '' ) );
// => true

console.log( isFalsy( void 0 ) );
// => true

console.log( isFalsy( null ) );
// => true

console.log( isFalsy( 'beep' ) );
// => false

console.log( isFalsy( 5 ) );
// => false

console.log( isFalsy( true ) );
// => false

console.log( isFalsy( [] ) );
// => false

console.log( isFalsy( {} ) );
// => false

console.log( isFalsy( function foo() {} ) );
// => false
