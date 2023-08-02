/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { NumericArray } from '@stdlib/types/array';

/**
* Tests if a value is a numeric array.
*
* @param v - value to test
* @returns boolean indicating if a value is a numeric array
*
* @example
* var bool = isNumericArray( new Int8Array( 10 ) );
* // returns true
*
* bool = isNumericArray( [ 1, 2, 3 ] );
* // returns true
*
* bool = isNumericArray( [ '1', '2', '3' ] );
* // returns false
*/
declare function isNumericArray( v: any ): v is NumericArray;


// EXPORTS //

export = isNumericArray;
