<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isArrayBuffer

> Test if a value is an [ArrayBuffer][mdn-arraybuffer].

<section class="usage">

## Usage

```javascript
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
```

#### isArrayBuffer( value )

Tests if a value is an [`ArrayBuffer`][mdn-arraybuffer].

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );

var bool = isArrayBuffer( new ArrayBuffer( 10 ) );
// returns true

bool = isArrayBuffer( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );

var bool = isArrayBuffer( new ArrayBuffer( 10 ) );
// returns true

bool = isArrayBuffer( new Float32Array( 10 ) );
// returns false

bool = isArrayBuffer( new Int8Array( 10 ) );
// returns false

bool = isArrayBuffer( new Uint8Array( 10 ) );
// returns false

bool = isArrayBuffer( new Uint8ClampedArray( 10 ) );
// returns false

bool = isArrayBuffer( new Int16Array( 10 ) );
// returns false

bool = isArrayBuffer( new Uint16Array( 10 ) );
// returns false

bool = isArrayBuffer( new Int32Array( 10 ) );
// returns false

bool = isArrayBuffer( new Uint32Array( 10 ) );
// returns false

bool = isArrayBuffer( new Float64Array( 10 ) );
// returns false

bool = isArrayBuffer( new Array( 10 ) );
// returns false

bool = isArrayBuffer( {} );
// returns false

bool = isArrayBuffer( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-sharedarraybuffer`][@stdlib/assert/is-sharedarraybuffer]</span><span class="delimiter">: </span><span class="description">test if a value is a SharedArrayBuffer.</span>
-   <span class="package-name">[`@stdlib/assert/is-typed-array`][@stdlib/assert/is-typed-array]</span><span class="delimiter">: </span><span class="description">test if a value is a typed array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

<!-- <related-links> -->

[@stdlib/assert/is-sharedarraybuffer]: https://github.com/stdlib-js/assert/tree/main/is-sharedarraybuffer

[@stdlib/assert/is-typed-array]: https://github.com/stdlib-js/assert/tree/main/is-typed-array

<!-- </related-links> -->

</section>

<!-- /.links -->
