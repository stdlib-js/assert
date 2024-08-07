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

var readFile = require( '@stdlib/fs/read-file' ).sync;
var contains = require( './../../contains' );
var isError = require( './../../is-error' );
var exists = require( '@stdlib/fs/exists' ).sync;


// VARIABLES //

var OPTS = {
	'encoding': 'utf8'
};


// MAIN //

/**
* Returns a boolean indicating if the process is running in a Docker container.
*
* @returns {boolean} boolean indicating if the process is running in a Docker container
*
* @example
* var bool = isDocker();
* // returns <boolean>
*/
function isDocker() {
	var file;
	if ( exists( '/.dockerenv' ) ) {
		return true;
	}
	file = readFile( '/proc/self/cgroup', OPTS );
	if ( isError( file ) ) {
		return false;
	}
	return contains( file, 'docker' );
}


// EXPORTS //

module.exports = isDocker;
