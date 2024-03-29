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

'use strict';

// MODULES //

var isFunction = require( './../../is-function' );
var reNativeFunction = require( '@stdlib/regexp/native-function' );
var function2string = require( '@stdlib/function/to-string' );


// MAIN //

/**
* Tests if a value is a native function.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a native function
*
* @example
* function beep() {
*     console.log( 'boop' );
* }
*
* var bool = isNativeFunction( beep );
* // returns false
*
* bool = isNativeFunction( Date );
* // returns true
*/
function isNativeFunction( value ) {
	return (
		isFunction( value ) &&
		reNativeFunction.REGEXP.test( function2string( value ) )
	);
}


// EXPORTS //

module.exports = isNativeFunction;
