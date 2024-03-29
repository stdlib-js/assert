/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/**
* Tests if a value is a constantcase string.
*
* @param value - value to test
* @returns boolean indicating whether a value is a constantcase string
*
* @example
* var bool = isConstantcase( 'BEEP_BOOP' );
* // returns true
*
* bool = isConstantcase( 'beep_boop' );
* // returns false
*
* bool = isConstantcase( 'BEEP-BOOP' );
* // returns false
*
* bool = isConstantcase( 'beep boop' );
* // returns false
*
* bool = isConstantcase( 'beep' );
* // returns false
*
* bool = isConstantcase( '' );
* // returns false
*
* bool = isConstantcase( null );
* // returns false
*/
declare function isConstantcase( value: any ): boolean;


// EXPORTS //

export = isConstantcase;
