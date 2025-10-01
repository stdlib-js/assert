<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# isSameTypedArrayLike

> Test if two arguments are both typed-array-like objects and have the [same values][@stdlib/assert/is-same-value].

<section class="usage">

## Usage

```javascript
var isSameTypedArrayLike = require( '@stdlib/assert/is-same-typed-array-like' );
```

#### isSameTypedArrayLike( v1, v2 )

Tests if two arguments are both typed-array-like objects and have the [same values][@stdlib/assert/is-same-value].

```javascript
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );

var x = new Int8Array( [ 1.0, 2.0 ] );
var y = new Int16Array( [ 1.0, 2.0 ] );
var bool = isSameTypedArrayLike( x, y );
// returns true

bool = isSameTypedArrayLike( x, new Int8Array( [ -1.0, 2.0 ] ) );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var isSameTypedArrayLike = require( '@stdlib/assert/is-same-typed-array-like' );

var x = new Int8Array( [ 1.0, 2.0, 3.0 ] );
var y = new Int16Array( [ 1.0, 2.0, 3.0 ] );
var out = isSameTypedArrayLike( x, y );
// returns true

x = new Int8Array( [ 1.0, 2.0, 3.0 ] );
y = new Int16Array( [ 1.0, 2.0, 4.0 ] );
out = isSameTypedArrayLike( x, y );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert/tree/main/is-same-value

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
