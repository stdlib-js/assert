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

import isNegativeZero = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isNegativeZero( 3 ); // $ExpectType boolean
	isNegativeZero( -0 ); // $ExpectType boolean
	isNegativeZero( 0 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isNegativeZero(); // $ExpectError
	isNegativeZero( -0, 123 ); // $ExpectError
}

// Attached to main export is an isPrimitive method which returns a boolean...
{
	// eslint-disable-next-line no-new-wrappers
	isNegativeZero.isPrimitive( new Number( -0 ) ); // $ExpectType boolean
	isNegativeZero.isPrimitive( -0 ); // $ExpectType boolean
}

// The compiler throws an error if the isPrimitive method is provided an unsupported number of arguments...
{
	isNegativeZero.isPrimitive(); // $ExpectError
	isNegativeZero.isPrimitive( -0, 123 ); // $ExpectError
}


// Attached to main export is an isPrimitive method which returns a boolean...
{
	// eslint-disable-next-line no-new-wrappers
	isNegativeZero.isObject( new Number( -0 ) ); // $ExpectType boolean
	isNegativeZero.isObject( -0 ); // $ExpectType boolean
}

// The compiler throws an error if the isObject method is provided an unsupported number of arguments...
{
	isNegativeZero.isObject(); // $ExpectError
	isNegativeZero.isObject( -0, 123 ); // $ExpectError
}
