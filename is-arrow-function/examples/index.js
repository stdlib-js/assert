/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var hasArrowFunctionSupport = require( './../../has-arrow-function-support' );
var evil = require( '@stdlib/utils/eval' );
var isArrowFunction = require( './../lib' );

function createArrowFunction() {
	return evil( '( () => {} )' );
}

if ( hasArrowFunctionSupport() ) {
	console.log( isArrowFunction( createArrowFunction() ) );
	// => true
}

console.log( isArrowFunction( function foo() {} ) );
// => false

console.log( isArrowFunction( 'beep' ) );
// => false

console.log( isArrowFunction( 5 ) );
// => false

console.log( isArrowFunction( true ) );
// => false

console.log( isArrowFunction( null ) );
// => false

console.log( isArrowFunction( [] ) );
// => false

console.log( isArrowFunction( {} ) );
// => false
