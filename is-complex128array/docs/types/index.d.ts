/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Complex128Array } from '@stdlib/types/array';

/**
* Tests if a value is a Complex128Array.
*
* @param value - value to test
* @returns boolean indicating whether value is a Complex128Array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var bool = isComplex128Array( new Complex128Array( 10 ) );
* // returns true
*
* @example
* var bool = isComplex128Array( [] );
* // returns false
*/
declare function isComplex128Array( value: any ): value is Complex128Array;


// EXPORTS //

export = isComplex128Array;
