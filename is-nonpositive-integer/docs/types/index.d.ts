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

/**
* Interface defining `isNonPositiveInteger` with methods for testing for primitives and objects, respectively.
*/
interface IsNonPositiveInteger {
	/**
	* Tests if a value is a nonpositive integer.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a nonpositive integer
	*
	* @example
	* var bool = isNonPositiveInteger( -5.0 );
	* // returns true
	*
	* @example
	* var bool = isNonPositiveInteger( new Number( -5.0 ) );
	* // returns true
	*
	* @example
	* var bool = isNonPositiveInteger( 5.0 );
	* // returns false
	*
	* @example
	* var bool = isNonPositiveInteger( -3.14 );
	* // returns false
	*
	* @example
	* var bool = isNonPositiveInteger( null );
	* // returns false
	*/
	( value: any ): value is number | Number;

	/**
	* Tests if a value is a number primitive having a nonpositive integer value.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number primitive having a nonpositive integer value
	*
	* @example
	* var bool = isNonPositiveInteger.isPrimitive( -3.0 );
	* // returns true
	*
	* @example
	* var bool = isNonPositiveInteger.isPrimitive( new Number( -3.0 ) );
	* // returns false
	*/
	isPrimitive( value: any ): value is number;

	/**
	* Tests if a value is a number object having a nonpositive integer value.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object having a nonpositive integer value
	*
	* @example
	* var bool = isNonPositiveInteger.isObject( -3.0 );
	* // returns false
	*
	* @example
	* var bool = isNonPositiveInteger.isObject( new Number( -3.0 ) );
	* // returns true
	*/
	isObject( value: any ): value is Number;
}

/**
* Tests if a value is a nonpositive integer.
*
* @param value - value to test
* @returns boolean indicating whether value is a nonpositive integer
*
* @example
* var bool = isNonPositiveInteger( -5.0 );
* // returns true
*
* @example
* var bool = isNonPositiveInteger( new Number( -5.0 ) );
* // returns true
*
* @example
* var bool = isNonPositiveInteger( 5.0 );
* // returns false
*
* @example
* var bool = isNonPositiveInteger( -3.14 );
* // returns false
*
* @example
* var bool = isNonPositiveInteger( null );
* // returns false
*
* @example
* var bool = isNonPositiveInteger.isPrimitive( -3.0 );
* // returns true
*
* @example
* var bool = isNonPositiveInteger.isObject( new Number( -3.0 ) );
* // returns true
*/
declare var isNonPositiveInteger: IsNonPositiveInteger;


// EXPORTS //

export = isNonPositiveInteger;
