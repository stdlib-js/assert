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

var isNodeWritableStreamLike = require( './../../is-node-writable-stream-like' );
var isNodeReadableStreamLike = require( './../../is-node-readable-stream-like' );


// MAIN //

/**
* Tests if a value is Node duplex stream-like.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is Node duplex stream-like
*
* @example
* var transformStream = require( '@stdlib/streams/node/transform' );
*
* var stream = transformStream();
*
* var bool = isNodeDuplexStreamLike( stream );
* // returns true
*
* bool = isNodeDuplexStreamLike( {} );
* // returns false
*/
function isNodeDuplexStreamLike( value ) {
	return (
		// Must be both readable and writable:
		isNodeWritableStreamLike( value ) &&
		isNodeReadableStreamLike( value )
	);
}


// EXPORTS //

module.exports = isNodeDuplexStreamLike;
