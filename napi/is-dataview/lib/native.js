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

// MODULES //

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Wrapper function exposing the C API to JavaScript.
*
* @private
* @param {DataView} v1 - first value
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var DataView = require( '@stdlib/array/dataview' );
*
* wrapper( new DataView( new ArrayBuffer( 10 ) ) );
*/
function wrapper( v1 ) {
	addon( v1 );
}


// EXPORTS //

module.exports = wrapper;
