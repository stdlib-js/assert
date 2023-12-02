<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# isComplex64ndarrayLike

> Test if a value is an [ndarray][@stdlib/ndarray/ctor]-like object containing single-precision complex floating-point numbers.

<section class="usage">

## Usage

```javascript
var isComplex64ndarrayLike = require( '@stdlib/assert/is-complex64ndarray-like' );
```

#### isComplex64ndarrayLike( value )

Tests if a value is an [ndarray][@stdlib/ndarray/ctor]-like object whose underlying data type is `complex64`.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var ndarray = require( '@stdlib/ndarray/ctor' );

var arr = ndarray( 'complex64', new Complex64Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

var bool = isComplex64ndarrayLike( arr );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );
var Complex64Array = require( '@stdlib/array/complex64' );
var isComplex64ndarrayLike = require( '@stdlib/assert/is-complex64ndarray-like' );

var buffer = new Complex64Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
var arr = ndarray( 'complex64', buffer, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

var out = isComplex64ndarrayLike( arr );
// returns true

out = isComplex64ndarrayLike( [ 1, 2, 3, 4 ] );
// returns false

out = isComplex64ndarrayLike( {} );
// returns false

out = isComplex64ndarrayLike( null );
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

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

</section>

<!-- /.links -->
