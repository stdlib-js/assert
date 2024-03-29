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

var hasOwnProp = require( './../../has-own-property' );
var Symbol = require( '@stdlib/symbol/ctor' );


// MAIN //

/**
* Tests for native `Symbol.iterator` support.
*
* @returns {boolean} boolean indicating if an environment has `Symbol.iterator` support
*
* @example
* var bool = hasIteratorSymbolSupport();
* // returns <boolean>
*/
function hasIteratorSymbolSupport() {
	return (
		typeof Symbol === 'function' &&
		typeof Symbol( 'foo' ) === 'symbol' &&
		hasOwnProp( Symbol, 'iterator' ) &&
		typeof Symbol.iterator === 'symbol'
	);
}


// EXPORTS //

module.exports = hasIteratorSymbolSupport;
