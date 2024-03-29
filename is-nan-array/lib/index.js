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
* Test if a value is an array-like object containing only `NaN` values.
*
* @module @stdlib/assert/is-nan-array
*
* @example
* var isNaNArray = require( '@stdlib/assert/is-nan-array' );
*
* var bool = isNaNArray( [ NaN, NaN, NaN ] );
* // returns true
*
* bool = isNaNArray( [ NaN, 2 ] );
* // returns false
*
* bool = isNaNArray.primitives( [ NaN, new Number( NaN ) ] );
* // returns false
*
* bool = isNaNArray.primitives( [ NaN, NaN, NaN ] );
* // returns true
*
* bool = isNaNArray.objects( [ new Number( NaN ), new Number( NaN ) ] );
* // returns true
*
* bool = isNaNArray.objects( [ NaN, new Number( NaN ), new Number( NaN ) ] );
* // returns false
*
* bool = isNaNArray.objects( [ NaN, NaN, NaN ] );
* // returns false
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var arrayfun = require( './../../tools/array-like-function' );
var isnan = require( './../../is-nan' );


// VARIABLES //

var isPrimitiveArray = arrayfun( isnan.isPrimitive );
var isObjectArray = arrayfun( isnan.isObject );


// MAIN //

var isNaNArray = arrayfun( isnan );
setReadOnly( isNaNArray, 'primitives', isPrimitiveArray );
setReadOnly( isNaNArray, 'objects', isObjectArray );


// EXPORTS //

module.exports = isNaNArray;
