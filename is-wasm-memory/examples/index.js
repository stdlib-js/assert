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

var hasWebAssemblySupport = require( './../../has-wasm-support' );
var Uint8Array = require( '@stdlib/array/uint8' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var Memory = require( '@stdlib/wasm/memory' );
var isWebAssemblyMemory = require( './../lib' );

var bool = isWebAssemblyMemory( new Uint8Array( 10 ) );
console.error( bool );
// => false

bool = isWebAssemblyMemory( new ArrayBuffer( 10 ) );
console.error( bool );
// => false

if ( hasWebAssemblySupport() ) {
	bool = isWebAssemblyMemory( new Memory({
		'initial': 0
	}));
	console.log( bool );
	// => true
}
