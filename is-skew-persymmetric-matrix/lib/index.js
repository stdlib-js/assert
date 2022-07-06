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
* Test if a value is a skew-persymmetric matrix.
*
* @module @stdlib/assert/is-skew-persymmetric-matrix
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var isSkewPersymmetricMatrix = require( '@stdlib/assert/is-skew-persymmetric-matrix' );
*
* var arr = ndarray( 'generic', [ 1, 0, 0, -1 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
* var bool = isSkewPersymmetricMatrix( arr );
* // returns true
*
* bool = isSkewPersymmetricMatrix( [] );
* // returns false
*/

// MODULES //

var isSkewPersymmetricMatrix = require( './main.js' );


// EXPORTS //

module.exports = isSkewPersymmetricMatrix;
