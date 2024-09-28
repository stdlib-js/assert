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

/**
* Tests whether a value is a property key.
*
* ## Notes
*
* -   A property key is either a string, symbol, or a nonnegative integer.
*
* @param value - value to test
* @returns boolean indicating whether value is a property key
*
* @example
* var bool = isPropertyKey( 'beep' );
* // returns true
*
* @example
* var bool = isPropertyKey( 37 );
* // returns true
*
* @example
* var bool = isPropertyKey( {} );
* // returns false
*
* @example
* var bool = isPropertyKey( [] );
* // returns false
*/
declare function isPropertyKey( value: any ): value is PropertyKey;


// EXPORTS //

export = isPropertyKey;
