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

'use strict';

// MODULES //

var proc = require( 'process' );
var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var isNode = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNode, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if runtime is Node.js (Node.js < v7)', function test( t ) {
	var isNode;

	function nativeClass( val ) {
		if ( val === proc ) {
			return '[object process]';
		}
		// Node.js version <7 (https://github.com/nodejs/node/issues/9274):
		return '[object global]';
	}

	function isString() {}
	isString.isPrimitive = alwaysTrue;

	function alwaysTrue() {
		return true;
	}

	isNode = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass,
		'./../../is-plain-object': alwaysTrue,
		'./../../is-string': isString,
		'./global_scope.js': true
	});

	t.equal( isNode(), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if runtime is Node.js (Node.js >= v7)', function test( t ) {
	var isNode;

	function nativeClass( val ) {
		if ( val === proc ) {
			return '[object process]';
		}
		// Node.js version >=7 (https://github.com/nodejs/node/issues/9274):
		return '[object Object]';
	}

	function isString() {}
	isString.isPrimitive = alwaysTrue;

	function alwaysTrue() {
		return true;
	}

	isNode = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass,
		'./../../is-plain-object': alwaysTrue,
		'./../../is-string': isString,
		'./global_scope.js': true
	});

	t.equal( isNode(), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if runtime is not Node.js (`global` variable does not equal the detected global variable)', function test( t ) {
	var isNode;

	function getGlobal() {
		return {};
	}

	function nativeClass( val ) {
		if ( val === proc ) {
			return '[object process]';
		}
		// Node.js version <7 (https://github.com/nodejs/node/issues/9274):
		return '[object global]';
	}

	function isString() {}
	isString.isPrimitive = alwaysTrue;

	function alwaysTrue() {
		return true;
	}

	isNode = proxyquire( './../lib/main.js', {
		'@stdlib/utils/global': getGlobal,
		'@stdlib/utils/native-class': nativeClass,
		'./../../is-plain-object': alwaysTrue,
		'./../../is-string': isString,
		'./global_scope.js': true
	});
	t.equal( isNode(), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if runtime is not Node.js (`global` variable has wrong class)', function test( t ) {
	var isNode;

	function nativeClass() {
		return '[object beeeeeeep]';
	}

	function isString() {}
	isString.isPrimitive = alwaysTrue;

	function alwaysTrue() {
		return true;
	}

	isNode = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass,
		'./../../is-plain-object': alwaysTrue,
		'./../../is-string': isString,
		'./global_scope.js': true
	});
	t.equal( isNode(), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if runtime is not Node.js (`global` variable is not the global scope)', function test( t ) {
	var isNode;

	function nativeClass( val ) {
		if ( val === proc ) {
			return '[object process]';
		}
		// Node.js version <7 (https://github.com/nodejs/node/issues/9274):
		return '[object global]';
	}

	function isString() {}
	isString.isPrimitive = alwaysTrue;

	function alwaysTrue() {
		return true;
	}

	isNode = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass,
		'./../../is-plain-object': alwaysTrue,
		'./../../is-string': isString,
		'./global_scope.js': false
	});
	t.equal( isNode(), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if runtime is not Node.js (`process` variable has wrong class)', function test( t ) {
	var isNode;

	function nativeClass() {
		// Node.js version <7 (https://github.com/nodejs/node/issues/9274):
		return '[object global]';
	}

	function toStr( val ) {
		if ( val === proc ) {
			return '[object beeeeeeep]';
		}
		return Object.prototype.toString.call( val );
	}

	function isString() {}
	isString.isPrimitive = alwaysTrue;

	function alwaysTrue() {
		return true;
	}

	isNode = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass,
		'./../../is-plain-object': alwaysTrue,
		'./../../is-string': isString,
		'./global_scope.js': true,
		'./to_string.js': toStr
	});
	t.equal( isNode(), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if runtime is not Node.js (`process.versions` is not an object)', function test( t ) {
	var isNode;

	function nativeClass( val ) {
		if ( val === proc ) {
			return '[object process]';
		}
		// Node.js version <7 (https://github.com/nodejs/node/issues/9274):
		return '[object global]';
	}

	function isString() {}
	isString.isPrimitive = alwaysTrue;

	function isObject( val ) {
		if ( val === proc.versions ) {
			return false;
		}
		return ( typeof val === 'object' );
	}

	function alwaysTrue() {
		return true;
	}

	isNode = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass,
		'./../../is-plain-object': isObject,
		'./../../is-string': isString,
		'./global_scope.js': true
	});
	t.equal( isNode(), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if runtime is not Node.js (`process.versions.node` is not a string primitive)', function test( t ) {
	var isNode;

	function nativeClass( val ) {
		if ( val === proc ) {
			return '[object process]';
		}
		// Node.js version <7 (https://github.com/nodejs/node/issues/9274):
		return '[object global]';
	}

	function isString() {}
	isString.isPrimitive = isPrimitive;

	function isPrimitive( val ) {
		if ( val === proc.versions.node ) {
			return false;
		}
		return ( typeof val === 'string' );
	}

	function alwaysTrue() {
		return true;
	}

	isNode = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass,
		'./../../is-plain-object': alwaysTrue,
		'./../../is-string': isString,
		'./global_scope.js': true
	});
	t.equal( isNode(), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if runtime is not Node.js (`process.release` is not an object; Node >=v3.0.0)', function test( t ) {
	var isNode;

	function nativeClass( val ) {
		if ( val === proc ) {
			return '[object process]';
		}
		// Node.js version <7 (https://github.com/nodejs/node/issues/9274):
		return '[object global]';
	}

	function isString() {}
	isString.isPrimitive = alwaysTrue;

	function isObject( val ) {
		if ( proc.release && val === proc.release ) {
			return false;
		}
		return ( typeof val === 'object' );
	}

	function alwaysTrue() {
		return true;
	}

	isNode = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass,
		'./../../is-plain-object': isObject,
		'./../../is-string': isString,
		'./global_scope.js': true
	});

	// `process.release` was added in Node v3.0.0
	if ( proc.release ) {
		t.equal( isNode(), false, 'returns false' );
	} else {
		t.equal( isNode(), true, 'returns true' );
	}
	t.end();
});

tape( 'the function returns `false` if runtime is not Node.js (`process.release.name` is not a string primitive; Node >=v3.0.0)', function test( t ) {
	var isNode;

	function nativeClass( val ) {
		if ( val === proc ) {
			return '[object process]';
		}
		// Node.js version <7 (https://github.com/nodejs/node/issues/9274):
		return '[object global]';
	}

	function isString() {}
	isString.isPrimitive = isPrimitive;

	function isPrimitive( val ) {
		if ( proc.release && val === proc.release.name ) {
			return false;
		}
		return ( typeof val === 'string' );
	}

	function alwaysTrue() {
		return true;
	}

	isNode = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass,
		'./../../is-plain-object': alwaysTrue,
		'./../../is-string': isString,
		'./global_scope.js': true
	});

	// `process.release` was added in Node v3.0.0
	if ( proc.release ) {
		t.equal( isNode(), false, 'returns false' );
	} else {
		t.equal( isNode(), true, 'returns true' );
	}
	t.end();
});
