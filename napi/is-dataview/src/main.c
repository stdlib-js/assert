/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/assert/napi/is_dataview.h"
#include "stdlib/assert/napi/status_ok.h"
#include <node_api.h>

/**
* Asserts that a Node-API value is a Node-API DataView.
*
* @param env       environment under which the function is invoked
* @param value     Node-API value
* @param message   error message
* @param err       pointer for storing a JavaScript error
* @return          status code indicating success or failure (returns `napi_ok` if success)
*
* @example
* #include "stdlib/assert/napi/is_dataview.h"
* #include <node_api.h>
*
* static napi_value addon( napi_env env, napi_callback_info info ) {
*     napi_value value;
*
*     // ...
*
*     napi_value err;
*     napi_status status = stdlib_assert_napi_value_is_dataview( env, value, "Must be a DataView.", &err );
*     assert( status == napi_ok );
*     if ( err != NULL ) {
*         assert( napi_throw( env, err ) == napi_ok );
*         return NULL;
*     }
*
*     // ...
* }
*/
napi_status stdlib_assert_napi_value_is_dataview( const napi_env env, const napi_value value, const char *message, napi_value *err ) {
	bool res;
	STDLIB_ASSERT_NAPI_STATUS_OK_RET_VALUE( env, napi_is_dataview( env, value, &res ), "", napi_ok )
	if ( res == false ) {
		napi_value msg;
		STDLIB_ASSERT_NAPI_STATUS_OK_RET_VALUE( env, napi_create_string_utf8( env, message, NAPI_AUTO_LENGTH, &msg ), "", napi_ok )

		napi_value error;
		STDLIB_ASSERT_NAPI_STATUS_OK_RET_VALUE( env, napi_create_type_error( env, NULL, msg, &error ), "", napi_ok )

		*err = error;
		return napi_ok;
	}
	*err = NULL;
	return napi_ok;
}
