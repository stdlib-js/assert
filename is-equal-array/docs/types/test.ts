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

import isEqualArray = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isEqualArray( 3.14, 3.14 ); // $ExpectType boolean
	isEqualArray( null, null ); // $ExpectType boolean
	isEqualArray( 'beep', 'boop' ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isEqualArray(); // $ExpectError
	isEqualArray( 3.14 ); // $ExpectError
	isEqualArray( 'beep', 'beep', 3.14 ); // $ExpectError
}
