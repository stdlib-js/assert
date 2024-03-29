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

// TypeScript Version: 4.1

/**
* Interface defining `isBoolean` with methods for testing for primitives and objects, respectively.
*/
interface IsBoolean {
	/**
	* Tests if a value is a boolean.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a boolean
	*
	* @example
	* var bool = isBoolean( false );
	* // returns true
	*
	* @example
	* var bool = isBoolean( true );
	* // returns true
	*
	* @example
	* var Boolean = require( '@stdlib/boolean/ctor' );
	*
	* var bool = isBoolean( new Boolean( false ) );
	* // returns true
	*
	* @example
	* var Boolean = require( '@stdlib/boolean/ctor' );
	*
	* var bool = isBoolean( new Boolean( true ) );
	* // returns true
	*/
	( value: any ): value is boolean | Boolean;

	/**
	* Tests if a value is a boolean primitive.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a boolean primitive
	*
	* @example
	* var bool = isBoolean.isPrimitive( true );
	* // returns true
	*
	* @example
	* var bool = isBoolean.isPrimitive( false );
	* // returns true
	*
	* @example
	* var Boolean = require( '@stdlib/boolean/ctor' );
	*
	* var bool = isBoolean.isPrimitive( new Boolean( true ) );
	* // returns false
	*/
	isPrimitive( value: any ): value is boolean;

	/**
	* Tests if a value is a boolean object.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a boolean object
	*
	* @example
	* var bool = isBoolean.isObject( true );
	* // returns false
	*
	* @example
	* var Boolean = require( '@stdlib/boolean/ctor' );
	*
	* var bool = isBoolean.isObject( new Boolean( false ) );
	* // returns true
	*/
	isObject( value: any ): value is Boolean;
}

/**
* Tests if a value is a boolean.
*
* @param value - value to test
* @returns boolean indicating whether value is a boolean
*
* @example
* var bool = isBoolean( false );
* // returns true
*
* @example
* var bool = isBoolean( true );
* // returns true
*
* @example
* var Boolean = require( '@stdlib/boolean/ctor' );
*
* var bool = isBoolean.isPrimitive( new Boolean( true ) );
* // returns false
*
* @example
* var Boolean = require( '@stdlib/boolean/ctor' );
*
* var bool = isBoolean.isObject( new Boolean( false ) );
* // returns true
*/
declare var isBoolean: IsBoolean;


// EXPORTS //

export = isBoolean;
