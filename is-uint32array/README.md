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

# isUint32Array

> Test if a value is a [Uint32Array][mdn-uint32array].

<section class="usage">

## Usage

```javascript
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
```

#### isUint32Array( value )

Tests if a value is a [`Uint32Array`][mdn-uint32array].

```javascript
var Uint32Array = require( '@stdlib/array/uint32' );

var bool = isUint32Array( new Uint32Array( 10 ) );
// returns true

bool = isUint32Array( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var isUint32Array = require( '@stdlib/assert/is-uint32array' );

var bool = isUint32Array( new Uint32Array( 10 ) );
// returns true

bool = isUint32Array( new Int8Array( 10 ) );
// returns false

bool = isUint32Array( new Uint8Array( 10 ) );
// returns false

bool = isUint32Array( new Uint8ClampedArray( 10 ) );
// returns false

bool = isUint32Array( new Int16Array( 10 ) );
// returns false

bool = isUint32Array( new Uint16Array( 10 ) );
// returns false

bool = isUint32Array( new Int32Array( 10 ) );
// returns false

bool = isUint32Array( new Float32Array( 10 ) );
// returns false

bool = isUint32Array( new Float64Array( 10 ) );
// returns false

bool = isUint32Array( [] );
// returns false

bool = isUint32Array( {} );
// returns false

bool = isUint32Array( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-typed-array`][@stdlib/assert/is-typed-array]</span><span class="delimiter">: </span><span class="description">test if a value is a typed array.</span>
-   <span class="package-name">[`@stdlib/assert/is-uint16array`][@stdlib/assert/is-uint16array]</span><span class="delimiter">: </span><span class="description">test if a value is a Uint16Array.</span>
-   <span class="package-name">[`@stdlib/assert/is-uint8array`][@stdlib/assert/is-uint8array]</span><span class="delimiter">: </span><span class="description">test if a value is a Uint8Array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-uint32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array

<!-- <related-links> -->

[@stdlib/assert/is-typed-array]: https://github.com/stdlib-js/assert/tree/main/is-typed-array

[@stdlib/assert/is-uint16array]: https://github.com/stdlib-js/assert/tree/main/is-uint16array

[@stdlib/assert/is-uint8array]: https://github.com/stdlib-js/assert/tree/main/is-uint8array

<!-- </related-links> -->

</section>

<!-- /.links -->
