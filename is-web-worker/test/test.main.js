/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

/* global global */

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var defineProperty = require( '@stdlib/utils/define-property' );
var getOwnPropertyDescriptor = require( '@stdlib/utils/property-descriptor' );
var isWebWorker = require( './../lib/main.js' );


// FUNCTIONS //

/**
* Mocks web worker globals and returns a cleanup function.
*
* @private
* @param {Object} options - mock options
* @param {*} options.WorkerGlobalScope - value for WorkerGlobalScope global
* @param {Function} options.WorkerNavigator - WorkerNavigator constructor
* @param {Function} options.WorkerLocation - WorkerLocation constructor
* @param {*} options.self - value for self global
* @param {Function} options.importScripts - importScripts function
* @param {*} options.navigator - value for navigator global
* @param {*} options.location - value for location global
* @returns {Function} cleanup function
*/
function mockGlobals( options ) {
	var origImport;
	var origSelf;
	var origWNav;
	var origWLoc;
	var origWGS;
	var origNav;
	var origLoc;

	// Save original values:
	origNav = getOwnPropertyDescriptor( global, 'navigator' );
	origLoc = getOwnPropertyDescriptor( global, 'location' );
	origSelf = global.self;
	origImport = global.importScripts;
	origWGS = global.WorkerGlobalScope;
	origWNav = global.WorkerNavigator;
	origWLoc = global.WorkerLocation;

	// Set all web worker globals:
	global.WorkerGlobalScope = options.WorkerGlobalScope;
	global.WorkerNavigator = options.WorkerNavigator;
	global.WorkerLocation = options.WorkerLocation;
	global.self = options.self;
	global.importScripts = options.importScripts;

	// Use `defineProperty` due to there being no `global` setters in newer Node.js versions:
	defineProperty( global, 'navigator', {
		'value': options.navigator,
		'writable': true,
		'configurable': true
	});
	defineProperty( global, 'location', {
		'value': options.location,
		'writable': true,
		'configurable': true
	});

	return cleanup;

	/**
	* Restores original global properties.
	*
	* @private
	*/
	function cleanup() {
		if ( origNav ) {
			defineProperty( global, 'navigator', origNav );
		} else {
			delete global.navigator;
		}
		if ( origLoc ) {
			defineProperty( global, 'location', origLoc );
		} else {
			delete global.location;
		}

		if ( origWGS === void 0 ) {
			delete global.WorkerGlobalScope;
		} else {
			global.WorkerGlobalScope = origWGS;
		}
		if ( origWNav === void 0 ) {
			delete global.WorkerNavigator;
		} else {
			global.WorkerNavigator = origWNav;
		}
		if ( origWLoc === void 0 ) {
			delete global.WorkerLocation;
		} else {
			global.WorkerLocation = origWLoc;
		}
		if ( origSelf === void 0 ) {
			delete global.self;
		} else {
			global.self = origSelf;
		}
		if ( origImport === void 0 ) {
			delete global.importScripts;
		} else {
			global.importScripts = origImport;
		}
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isWebWorker, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if the runtime is a web worker', function test( t ) {
	var isWebWorker;
	var cleanup;
	var scope;

	scope = {
		'self': {}
	};

	cleanup = mockGlobals({
		'WorkerGlobalScope': scope,
		'WorkerNavigator': WorkerNavigator,
		'WorkerLocation': WorkerLocation,
		'self': scope.self,
		'importScripts': importScripts,
		'navigator': new WorkerNavigator(),
		'location': new WorkerLocation()
	});

	isWebWorker = proxyquire( './../lib/main.js', {
		'@stdlib/utils/global': getGlobal,
		'./../../is-node': false,
		'./../../is-plain-object': alwaysTrue,
		'./global_scope.js': true
	});

	t.equal( isWebWorker(), true, 'returns true' );

	cleanup();
	t.end();

	function getGlobal() {
		return scope.self;
	}

	function importScripts() {}

	function alwaysTrue() {
		return true;
	}

	function WorkerNavigator() {
		return this;
	}

	function WorkerLocation() {
		return this;
	}
});

tape( 'the function returns `false` if the runtime is not a web worker (`WorkerGlobalScope` global is not an object)', function test( t ) {
	var isWebWorker;
	var cleanup;
	var scope;

	scope = true;

	cleanup = mockGlobals({
		'WorkerGlobalScope': scope,
		'WorkerNavigator': WorkerNavigator,
		'WorkerLocation': WorkerLocation,
		'self': {},
		'importScripts': importScripts,
		'navigator': new WorkerNavigator(),
		'location': new WorkerLocation()
	});

	isWebWorker = proxyquire( './../lib/main.js', {
		'@stdlib/utils/global': getGlobal,
		'./../../is-node': false,
		'./../../is-plain-object': alwaysTrue,
		'./global_scope.js': true
	});

	t.equal( isWebWorker(), false, 'returns false' );

	cleanup();
	t.end();

	function getGlobal() {
		return global.self;
	}

	function importScripts() {}

	function alwaysTrue() {
		return true;
	}

	function WorkerNavigator() {
		return this;
	}

	function WorkerLocation() {
		return this;
	}
});

tape( 'the function returns `false` if the runtime is not a web worker (`WorkerNavigator` global is not an object)', function test( t ) {
	var isWebWorker;
	var cleanup;
	var scope;

	scope = {
		'self': {}
	};

	cleanup = mockGlobals({
		'WorkerGlobalScope': scope,
		'WorkerNavigator': WorkerNavigator,
		'WorkerLocation': WorkerLocation,
		'self': scope.self,
		'importScripts': importScripts,
		'navigator': new WorkerNavigator(),
		'location': new WorkerLocation()
	});

	isWebWorker = proxyquire( './../lib/main.js', {
		'@stdlib/utils/global': getGlobal,
		'./../../is-node': false,
		'./../../is-plain-object': isObject,
		'./global_scope.js': true
	});

	t.equal( isWebWorker(), false, 'returns false' );

	cleanup();
	t.end();

	function getGlobal() {
		return scope.self;
	}

	function importScripts() {}

	function isObject( v ) {
		if ( v === WorkerNavigator ) {
			return false;
		}
		return true;
	}

	function WorkerNavigator() {
		return this;
	}

	function WorkerLocation() {
		return this;
	}
});

tape( 'the function returns `false` if the runtime is not a web worker (`navigator` global is not an instance of `WorkerNavigator`)', function test( t ) {
	var isWebWorker;
	var cleanup;
	var scope;

	scope = {
		'self': {}
	};

	cleanup = mockGlobals({
		'WorkerGlobalScope': scope,
		'WorkerNavigator': WorkerNavigator,
		'WorkerLocation': WorkerLocation,
		'self': scope.self,
		'importScripts': importScripts,
		'navigator': {},
		'location': new WorkerLocation()
	});

	isWebWorker = proxyquire( './../lib/main.js', {
		'@stdlib/utils/global': getGlobal,
		'./../../is-node': false,
		'./../../is-plain-object': alwaysTrue,
		'./global_scope.js': true
	});

	t.equal( isWebWorker(), false, 'returns false' );

	cleanup();
	t.end();

	function getGlobal() {
		return scope.self;
	}

	function importScripts() {}

	function alwaysTrue() {
		return true;
	}

	function WorkerNavigator() {
		return this;
	}

	function WorkerLocation() {
		return this;
	}
});

tape( 'the function returns `false` if the runtime is not a web worker (`WorkerLocation` global is not an object)', function test( t ) {
	var isWebWorker;
	var cleanup;
	var scope;

	scope = {
		'self': {}
	};

	cleanup = mockGlobals({
		'WorkerGlobalScope': scope,
		'WorkerNavigator': WorkerNavigator,
		'WorkerLocation': WorkerLocation,
		'self': scope.self,
		'importScripts': importScripts,
		'navigator': new WorkerNavigator(),
		'location': new WorkerLocation()
	});

	isWebWorker = proxyquire( './../lib/main.js', {
		'@stdlib/utils/global': getGlobal,
		'./../../is-node': false,
		'./../../is-plain-object': isObject,
		'./global_scope.js': true
	});

	t.equal( isWebWorker(), false, 'returns false' );

	cleanup();
	t.end();

	function getGlobal() {
		return scope.self;
	}

	function importScripts() {}

	function isObject( v ) {
		if ( v === WorkerLocation ) {
			return false;
		}
		return true;
	}

	function WorkerNavigator() {
		return this;
	}

	function WorkerLocation() {
		return this;
	}
});

tape( 'the function returns `false` if the runtime is not a web worker (`location` global is not an instance of `WorkerLocation`)', function test( t ) {
	var isWebWorker;
	var cleanup;
	var scope;

	scope = {
		'self': {}
	};

	cleanup = mockGlobals({
		'WorkerGlobalScope': scope,
		'WorkerNavigator': WorkerNavigator,
		'WorkerLocation': WorkerLocation,
		'self': scope.self,
		'importScripts': importScripts,
		'navigator': new WorkerNavigator(),
		'location': {}
	});

	isWebWorker = proxyquire( './../lib/main.js', {
		'@stdlib/utils/global': getGlobal,
		'./../../is-node': false,
		'./../../is-plain-object': alwaysTrue,
		'./global_scope.js': true
	});

	t.equal( isWebWorker(), false, 'returns false' );

	cleanup();
	t.end();

	function getGlobal() {
		return scope.self;
	}

	function importScripts() {}

	function alwaysTrue() {
		return true;
	}

	function WorkerNavigator() {
		return this;
	}

	function WorkerLocation() {
		return this;
	}
});

tape( 'the function returns `false` if the runtime is not a web worker (`self` global is not the detected global variable)', function test( t ) {
	var isWebWorker;
	var cleanup;
	var scope;

	scope = {
		'self': {}
	};

	cleanup = mockGlobals({
		'WorkerGlobalScope': scope,
		'WorkerNavigator': WorkerNavigator,
		'WorkerLocation': WorkerLocation,
		'self': scope.self,
		'importScripts': importScripts,
		'navigator': new WorkerNavigator(),
		'location': new WorkerLocation()
	});

	isWebWorker = proxyquire( './../lib/main.js', {
		'@stdlib/utils/global': getGlobal,
		'./../../is-node': false,
		'./../../is-plain-object': alwaysTrue,
		'./global_scope.js': true
	});

	t.equal( isWebWorker(), false, 'returns false' );

	cleanup();
	t.end();

	function getGlobal() {
		return {};
	}

	function importScripts() {}

	function alwaysTrue() {
		return true;
	}

	function WorkerNavigator() {
		return this;
	}

	function WorkerLocation() {
		return this;
	}
});

tape( 'the function returns `false` if the runtime is not a web worker (`self` global is not equal to the global scope)', function test( t ) {
	var isWebWorker;
	var cleanup;
	var scope;

	scope = {
		'self': {}
	};

	cleanup = mockGlobals({
		'WorkerGlobalScope': scope,
		'WorkerNavigator': WorkerNavigator,
		'WorkerLocation': WorkerLocation,
		'self': scope.self,
		'importScripts': importScripts,
		'navigator': new WorkerNavigator(),
		'location': new WorkerLocation()
	});

	isWebWorker = proxyquire( './../lib/main.js', {
		'@stdlib/utils/global': getGlobal,
		'./../../is-node': false,
		'./../../is-plain-object': alwaysTrue,
		'./global_scope.js': false
	});

	t.equal( isWebWorker(), false, 'returns false' );

	cleanup();
	t.end();

	function getGlobal() {
		return scope.self;
	}

	function importScripts() {}

	function alwaysTrue() {
		return true;
	}

	function WorkerNavigator() {
		return this;
	}

	function WorkerLocation() {
		return this;
	}
});
