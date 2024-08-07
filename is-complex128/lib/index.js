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

/**
* Test if a value is a 128-bit complex number.
*
* @module @stdlib/assert/is-complex128
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var isComplex128 = require( '@stdlib/assert/is-complex128' );
*
* var x = new Complex128( 4.0, 2.0 );
*
* var bool = isComplex128( x );
* // returns true
*/

// MODULES //

var isComplex128 = require( './main.js' );


// EXPORTS //

module.exports = isComplex128;
