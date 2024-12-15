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

import isSameComplex64 = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isSameComplex64( 3.14, 3.14 ); // $ExpectType boolean
	isSameComplex64( null, null ); // $ExpectType boolean
	isSameComplex64( 'beep', 'boop' ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isSameComplex64(); // $ExpectError
	isSameComplex64( 3.14 ); // $ExpectError
	isSameComplex64( 'beep', 'beep', 3.14 ); // $ExpectError
}
