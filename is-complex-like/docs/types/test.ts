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

import Complex128 = require( '@stdlib/complex/float64/ctor' );
import Complex64 = require( '@stdlib/complex/float32/ctor' );
import isComplexLike = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isComplexLike( new Complex128( 5.0, 3.0 ) ); // $ExpectType boolean
	isComplexLike( new Complex64( 5.0, 3.0 ) ); // $ExpectType boolean
	isComplexLike( { 're': 5.0, 'im': 3.0 } ); // $ExpectType boolean
	isComplexLike( 123 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isComplexLike(); // $ExpectError
	isComplexLike( new Complex128( 5.0, 3.0 ), 123 ); // $ExpectError
}
