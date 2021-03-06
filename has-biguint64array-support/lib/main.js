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

'use strict';

// MODULES //

var isBigUint64Array = require( './../../is-biguint64array' );
var isBigInt = require( './../../is-bigint' );
var GlobalBigUint64Array = require( './biguint64array.js' );


// VARIABLES //

var MAX_SIGNED_INT64 = '9223372036854775807'; // 2**63 - 1
var MAX_SIGNED_INT64_P2 = '9223372036854775809';


// MAIN //

/**
* Tests for native `BigUint64Array` support.
*
* @returns {boolean} boolean indicating if an environment has `BigUint64Array` support
*
* @example
* var bool = hasBigUint64ArraySupport();
* // returns <boolean>
*/
function hasBigUint64ArraySupport() {
	var arr;
	if ( typeof GlobalBigUint64Array !== 'function' ) {
		return false;
	}
	// Test basic support...
	try {
		arr = new GlobalBigUint64Array([
			MAX_SIGNED_INT64,
			MAX_SIGNED_INT64_P2
		]);
		return (
			isBigUint64Array( arr ) &&
			isBigInt( arr[ 0 ] ) &&
			arr[ 0 ].toString() === MAX_SIGNED_INT64 &&
			isBigInt( arr[ 1 ] ) &&
			arr[ 1 ].toString() === MAX_SIGNED_INT64_P2
		);
	} catch ( err ) { // eslint-disable-line no-unused-vars
		return false;
	}
}


// EXPORTS //

module.exports = hasBigUint64ArraySupport;
