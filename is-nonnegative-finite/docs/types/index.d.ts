/*
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

// TypeScript Version: 4.1

/**
* Interface defining `isNonNegativeFinite` with methods for testing for primitives and objects, respectively.
*/
interface IsNonNegativeFinite {
	/**
	* Tests if a value is a nonnegative finite number.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a nonnegative finite number
	*
	* @example
	* var bool = isNonNegativeFinite( 5.0 );
	* // returns true
	*
	* @example
	* var bool = isNonNegativeFinite( new Number( 5.0 ) );
	* // returns true
	*
	* @example
	* var bool = isNonNegativeFinite( 3.14 );
	* // returns true
	*
	* @example
	* var bool = isNonNegativeFinite( 1.0/0.0 );
	* // returns false
	*
	* @example
	* var bool = isNonNegativeFinite( -5.0 );
	* // returns false
	*
	* @example
	* var bool = isNonNegativeFinite( null );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is a number primitive having a nonnegative finite value.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number primitive having a nonnegative finite value
	*
	* @example
	* var bool = isNonNegativeNumber( 3.0 );
	* // returns true
	*
	* @example
	* var bool = isNonNegativeNumber( new Number( 3.0 ) );
	* // returns false
	*
	* @example
	* var bool = isNonNegativeFinite( new Number( -5.0 ) );
	* // returns false
	*
	* @example
	* var bool = isNonNegativeFinite( 1.0/0.0 );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is a finite number object having a nonnegative value.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number object having a nonnegative finite number value
	*
	* @example
	* var bool = isNonNegativeFinite( 3.0 );
	* // returns false
	*
	* @example
	* var bool = isNonNegativeFinite( new Number( 3.0 ) );
	* // returns true
	*
	* @example
	* var bool = isNonNegativeFinite( new Number( -5.0 ) );
	* // returns false
	*
	* @example
	* var bool = isNonNegativeFinite( 1.0/0.0 );
	* // returns false
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is a nonnegative finite number.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a nonnegative finite number
*
* @example
* var bool = isNonNegativeFinite( 5.0 );
* // returns true
*
* @example
* var bool = isNonNegativeFinite( new Number( 5.0 ) );
* // returns true
*
* @example
* var bool = isNonNegativeFinite( 3.14 );
* // returns true
*
* @example
* var bool = isNonNegativeFinite( 1.0/0.0 );
* // returns false
*
* @example
* var bool = isNonNegativeFinite( -5.0 );
* // returns false
*
* @example
* var bool = isNonNegativeFinite( null );
* // returns false
*/

declare var isNonNegativeFinite: IsNonNegativeFinite;


// EXPORTS //

export = isNonNegativeFinite;
